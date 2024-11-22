const Quiz = require("../models/quizModel");

const getQuizByLangType = async (req, res) => {
  const { languageType } = req.params;
  try {
    const quiz = await Quiz.getByLangType(languageType);
    if (quiz.length === 0) {
      return res
        .status(404)
        .json({ message: "Quiz Tidak Tersedia Untuk Bahasa Ini " });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Gagal Mengambil Data", error });
  }
};
const getQuizByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const quiz = await Quiz.getByCategory(category);
    if (quiz.length === 0) {
      return res
        .status(404)
        .json({ message: "Quiz Tidak Tersedia Untuk Category Ini " });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Gagal Mengambil Data", error });
  }
};

module.exports = { getQuizByLangType, getQuizByCategory };
