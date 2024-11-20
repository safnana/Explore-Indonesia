const express = require("express");
const { getAllFAQ } = require("../controllers/FAQController");

const router = express.Router();

router.get("/", getAllFAQ);

module.exports = router;
