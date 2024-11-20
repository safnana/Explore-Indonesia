const express = require('express');
const FAQRoutes = require("./routes/FAQRoute");

const app = express();

app.use(express.json());

app.use("/api/FAQ", FAQRoutes);

module.exports = app;
