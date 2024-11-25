const Quiz = require("../models/quizModel");

const getQuizLatihan = async (req, res) => {
  const { languageType, category } = req.params;
  try {
    const quiz = await Quiz.getByTypeLangCategory(languageType, category);
    if (quiz.length === 0) {
      return res.status(404).json({ message: "Quiz Latihan Tidak Tersedia Untuk Kategori Ini " });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Gagal Mengambil Data", error });
  }
};
const getQuizAkhir = async (req, res) => {
  const { languageType } = req.params;
  try {
    const quiz = await Quiz.getByTypeLang(languageType);
    if (quiz.length === 0) {
      return res.status(404).json({ message: "Quiz Akhir Tidak Tersedia Untuk Bahasa Ini " });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Gagal Mengambil Data", error });
  }
};

module.exports = { getQuizLatihan, getQuizAkhir };
