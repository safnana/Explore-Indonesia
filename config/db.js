const admin = require("firebase-admin");
const dotenv = require("dotenv");
const serviceAccount = require("./serviceAdminKey.json");

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db };
