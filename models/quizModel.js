const { db } = require("../config/db");

const Quiz = {
  getByTypeLang: async (languageType) => {
    const snapshot = await db
      .collection("quiz")
      .where("type", "==", "quizAkhir")
      .where("languageType", "==", languageType)
      .get();

    if (snapshot.empty) return [];
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
  getByTypeLangCategory: async (languageType, category) => {
    const snapshot = await db
      .collection("quiz")
      .where("type", "==", "latihan")
      .where("languageType", "==", languageType)
      .where("category", "==", category)
      .get();
    if (snapshot.empty) return [];
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};

module.exports = Quiz;
