const { db } = require("../config/db");

const FAQ = {
  getAll: async () => {
    const snapshot = await db.collection("FAQ").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};

module.exports = FAQ;
