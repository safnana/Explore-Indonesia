const express = require("express");
const {
  getQuizByLangType,
  getQuizByCategory,
} = require("../controllers/quizController");

const router = express.Router();

router.get("/:languageType", getQuizByLangType);
router.get("/:category", getQuizByCategory);

module.exports = router;
