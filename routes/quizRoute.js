const express = require("express");
const {
  getQuizLatihan,
  getQuizAkhir,
} = require("../controllers/quizController");

const router = express.Router();

router.get("/latihan/:languageType/:category", getQuizLatihan);
router.get("/quizAkhir/:languageType", getQuizAkhir);

module.exports = router;
