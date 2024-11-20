const express = require('express');
const FAQRoutes = require("./routes/FAQRoute");

const app = express();

app.use(express.json());

app.use("/api/FAQ", FAQRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
