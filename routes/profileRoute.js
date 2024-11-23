const express = require("express");
const { getProfilebyID, uploadPicture, putProfilebyID } = require("../controllers/profileController");

const router = express.Router();
router.get("/:userID", getProfilebyID);
router.put("/edit/:userID", uploadPicture, putProfilebyID);

module.exports = router;
