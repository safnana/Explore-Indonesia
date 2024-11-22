const { db } = require("../config/db");

const Flashcards = {
  getByLangCategory: async (languageType, category) => {
    const snapshot = await db
      .collection("flashcards")
      .where("languageType", "==", languageType)
      .where("category", "==", category)
      .get();

    if (snapshot.empty) return [];
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};

module.exports = Flashcards;
