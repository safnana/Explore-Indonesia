const express = require("express");
const { getFlashcardsbyLangCategory } = require("../controllers/flashcardsController");

const router = express.Router();

router.get("/:languageType/:category", getFlashcardsbyLangCategory);

module.exports = router;
