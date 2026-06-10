require('dotenv').config();
const express = require('express');
const basicAuth = require('basic-auth');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

const DATA_DIR = process.env.DATA_DIR || '/data';
const TOKEN_FILE = path.join(DATA_DIR, 'token');
const REPO_ROOT = process.env.REPO_ROOT || process.cwd();
const AUTO_START_DECAP = process.env.AUTO_START_DECAP === '1' || process.env.AUTO_START_DECAP === 'true';

let decapProcess = null;

function readToken() {
  if (!fs.existsSync(TOKEN_FILE)) return null;
  const token = fs.readFileSync(TOKEN_FILE, 'utf8').trim();
  return token.length > 0 ? token : null;
}

function stopDecap() {
  if (!decapProcess) return;
  decapProcess.kill('SIGTERM');
  decapProcess = null;
}

function startDecap() {
  const token = readToken();
  if (!token) {
    throw new Error('No token stored');
  }

  stopDecap();

  const child = spawn('npx', ['decap-server'], {
    cwd: REPO_ROOT,
    env: {
      ...process.env,
      GITHUB_TOKEN: token
    },
    stdio: 'inherit'
  });

  child.on('exit', (code, signal) => {
    console.log(`decap-server exited with code ${code} signal ${signal}`);
    if (decapProcess === child) {
      decapProcess = null;
    }
  });

  decapProcess = child;
  return child;
}

app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('combined'));

function checkAuth(req, res, next) {
  const user = basicAuth(req);
  const ADMIN_USER = process.env.BASIC_USER || 'admin';
  const ADMIN_PASS = process.env.BASIC_PASS || 'changeme';
  if (!user || user.name !== ADMIN_USER || user.pass !== ADMIN_PASS) {
    res.set('WWW-Authenticate', 'Basic realm="Decap Auth"');
    return res.status(401).send('Authentication required.');
  }
  return next();
}

app.get('/', (req, res) => {
  res.send('Decap Auth Server');
});

app.get('/login', checkAuth, (req, res) => {
  res.send(`<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Decap Login</title></head>
  <body>
    <h3>Decap GitHub token</h3>
    <form method="post" action="/login">
      <label>Email (for reference): <input name="email" type="email"></label><br>
      <label>GitHub token: <input name="token" type="text" size="80"></label><br>
      <button type="submit">Save token</button>
    </form>
    <p>Protected with Basic Auth.</p>
  </body>
</html>`);
});

app.post('/login', checkAuth, (req, res) => {
  const { token, email } = req.body;
  if (!token || token.trim().length === 0) {
    return res.status(400).send('Missing token');
  }
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true, mode: 0o700 });
    // write token with restricted permissions
    fs.writeFileSync(TOKEN_FILE, token.trim(), { mode: 0o600 });
    // optionally save metadata
    if (email) {
      fs.writeFileSync(path.join(DATA_DIR, 'meta.json'), JSON.stringify({ email, savedAt: new Date().toISOString() }, null, 2), { mode: 0o600 });
    }

    if (AUTO_START_DECAP) {
      startDecap();
    }

    res.send(AUTO_START_DECAP
      ? 'Token saved and Decap restarted on the server.'
      : 'Token saved on server. Decap was not auto-started.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save token');
  }
});

app.get('/token-status', checkAuth, (req, res) => {
  const exists = fs.existsSync(TOKEN_FILE);
  res.json({
    exists,
    decapRunning: Boolean(decapProcess),
    autoStartDecap: AUTO_START_DECAP
  });
});

app.post('/start', checkAuth, (req, res) => {
  try {
    startDecap();
    res.json({ ok: true, started: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ ok: false, error: err.message });
  }
});

app.post('/stop', checkAuth, (req, res) => {
  stopDecap();
  res.json({ ok: true, stopped: true });
});

app.listen(PORT, () => {
  console.log(`Decap Auth Server listening on port ${PORT}`);
});
