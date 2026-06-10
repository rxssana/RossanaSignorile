/**
 * Helper to fetch the token from Firestore using service account credentials.
 * Usage: set GOOGLE_APPLICATION_CREDENTIALS to the path of your service account JSON,
 * then `node get-token.js` will print the token to stdout.
 */
const admin = require('firebase-admin');

async function main() {
  admin.initializeApp();
  const db = admin.firestore();
  const snap = await db.doc('decap/current').get();
  if (!snap.exists) {
    console.error('No token saved');
    process.exit(2);
  }
  const data = snap.data();
  console.log(data.token);
}

main().catch(err => { console.error(err); process.exit(1); });
