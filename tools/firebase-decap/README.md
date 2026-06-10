Firebase Function: Decap token receiver
=====================================

This folder contains a small Firebase Cloud Function that accepts a GitHub Personal Access Token (PAT) from a static form and stores it securely in Firestore at `decap/current`.

Security note: the static form must send an `admin` password which is validated against the function config. Do NOT embed production secrets in the client. Use a strong password and HTTPS.

Steps to deploy
---------------
1. Install Firebase CLI and login:

```bash
npm install -g firebase-tools
firebase login
```

2. Initialize (if you don't have a Firebase project yet) or select an existing one:

```bash
firebase projects:list
firebase use --add <PROJECT_ID>
```

3. In `tools/firebase-decap/functions` run:

```bash
npm install
```

4. Configure the admin password (stored in functions config):

```bash
firebase functions:config:set admin.pass="YOUR_STRONG_PASSWORD"
```

5. Important: deploying Functions requires the Blaze (pay-as-you-go) plan. On the free Spark plan, Firebase Hosting will deploy, but the Function deploy will fail.

6. Deploy the function:

```bash
firebase deploy --only functions
```

7. Add Firebase Hosting and function rewrites by keeping `firebase.json` in the repo. The login page will call `/api/save-token` when it is served from Firebase Hosting.

8. Publish the site on Firebase Hosting (the repo already keeps GitHub Pages active as backup). If you want the login page to work from GitHub Pages too, you must replace `window.FUNCTION_BASE_URL` in `public/auth-login.html` with the full function URL or keep the login page on Firebase Hosting.

9. After deploy, the function URL shown in the deploy output will look like `https://<region>-<project>.cloudfunctions.net/api`. On Firebase Hosting, the login page can use the relative `/api` path.

Using the token with Decap
-------------------------
On a machine that has access to Firestore (or the deployed server), retrieve the token and run Decap:

```bash
# example: retrieve token via gcloud or Firebase admin SDK on your controlled server
# or query Firestore from a secure server and then set env var
GITHUB_TOKEN=$(node ./tools/firebase-decap/get-token.js) npx decap-server
```

I can add a helper `get-token.js` that runs with service account credentials to fetch the token if you want.
