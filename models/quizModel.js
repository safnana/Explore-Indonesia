const { db } = require("../config/db");

const Quiz = {
  getByLangType: async (languageType) => {
    const snapshot = await db
      .collection("quiz")
      .where("languageType", "==", languageType)
      .get();
    if (snapshot.empty) return [];
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
  getByCategory: async (category) => {
    const snapshot = await db
      .collection("quiz")
      .where("category", "==", category)
      .get();
    if (snapshot.empty) return [];
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};

module.exports = Quiz;
