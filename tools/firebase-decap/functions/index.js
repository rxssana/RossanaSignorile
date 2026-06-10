const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());

// Helper to read configured admin password from functions config
function getAdminPassword() {
  try {
    const cfg = functions.config();
    if (cfg && cfg.admin && cfg.admin.pass) return cfg.admin.pass;
  } catch (e) {
    // ignore
  }
  return process.env.ADMIN_PASS || null;
}

app.post('/save-token', async (req, res) => {
  const { token, email, password } = req.body || {};
  if (!token) return res.status(400).json({ error: 'missing token' });
  const adminPass = getAdminPassword();
  if (!adminPass) return res.status(500).json({ error: 'server not configured' });
  if (!password || password !== adminPass) return res.status(401).json({ error: 'unauthorized' });

  try {
    const docRef = db.doc('decap/current');
    await docRef.set({ token: token.trim(), email: email || null, savedAt: admin.firestore.FieldValue.serverTimestamp() });
    return res.json({ ok: true });
  } catch (err) {
    console.error('save-token error', err);
    return res.status(500).json({ error: 'save_failed' });
  }
});

app.get('/token-status', async (req, res) => {
  try {
    const snap = await db.doc('decap/current').get();
    return res.json({ exists: snap.exists });
  } catch (err) {
    return res.status(500).json({ error: 'failed' });
  }
});

exports.api = functions.https.onRequest(app);
