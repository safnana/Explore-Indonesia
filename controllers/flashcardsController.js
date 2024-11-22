const Flashcards = require("../models/flashcardsModel");

const getFlashcardsbyLangCategory = async (req, res) => {
  const { languageType, category } = req.params;
  try {
    const flashcards = await Flashcards.getByLangCategory(
      languageType,
      category
    );
    if (flashcards.length === 0) {
      return res.status(404).json({ message: "Flashcard Tidak Tersedia" });
    }
    res.status(200).json(flashcards);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "Gagal Mengambil Data", error });
  }
};

module.exports = { getFlashcardsbyLangCategory };
