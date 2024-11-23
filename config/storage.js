const { Storage } = require("@google-cloud/storage");
const dotenv = require("dotenv");

dotenv.config();

const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

const bucket = storage.bucket(process.env.GOOGLE_STORAGE_BUCKET);

module.exports = { storage, bucket };
