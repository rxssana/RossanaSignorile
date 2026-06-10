Decap Auth Server
=================

This small server provides a protected `/login` page where you can submit a GitHub Personal Access Token (PAT). The token is saved server-side at `/data/token` with restricted permissions.

Usage
-----

Build and run with Docker Compose (recommended on Ubuntu):

```bash
cd /path/to/RossanaSignorile/tools/decap-auth
export REPO_ROOT=/srv/RossanaSignorile
export BASIC_USER=admin
export BASIC_PASS=strongpassword
docker compose up -d --build
```

Then visit `http://100.66.9.116/login` and authenticate with Basic Auth using `BASIC_USER` / `BASIC_PASS`.

The Nginx container listens on port 80 and proxies to `decap-auth:3001`.

If you prefer a plain `docker run` setup instead of Compose:

```bash
# build
docker build -t decap-auth ./tools/decap-auth

# run (change BASIC_USER/PASS)
docker run -d \
  --name decap-auth \
  -p 3001:3001 \
  -v decap-auth-data:/data \
  -e REPO_ROOT=/path/to/your/repo \
  -e AUTO_START_DECAP=true \
  -e BASIC_USER=admin \
  -e BASIC_PASS=strongpassword \
  decap-auth
```

Then visit `http://100.66.9.116/login` and authenticate with Basic Auth using `BASIC_USER` / `BASIC_PASS`.

With `AUTO_START_DECAP=true`, saving a token will automatically restart Decap on the server using `npx decap-server` in `REPO_ROOT`.

After submitting the token, on the server you can also start or stop Decap manually:

```bash
curl -u admin:strongpassword -X POST http://100.66.9.116/start
curl -u admin:strongpassword -X POST http://100.66.9.116/stop
```

If you prefer to launch it manually, on the server you can run Decap using the stored token:

```bash
# on the server where /data/token is accessible
GITHUB_TOKEN=$(cat /data/token) npx decap-server
```

Security notes
--------------
- Protect the service with a strong `BASIC_PASS` and run it behind HTTPS (nginx + certbot). Do not expose it publicly without protection.
- The token is stored locally on the server in `/data/token` with permissions `600`.
- Expose only the login page and the start/stop endpoints to trusted users.

Deploy as a serverless function
--------------------------------
This code is suitable for Docker-based deployment. To adapt to serverless (Netlify Functions / Vercel), extract the POST handler logic and implement using the platform's function API; ensure secrets are stored using the platform's secret storage.
