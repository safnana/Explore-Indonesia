const FAQ = require("../models/FAQModel");

const getAllFAQ = async (req, res) => {
  try {
    const FAQs = await FAQ.getAll();
    res.status(200).json(FAQs);
  } catch (error) {
    res.status(500).json({ message: "Gagal Mengambil Data", error });
  }
};

module.exports = { getAllFAQ };
