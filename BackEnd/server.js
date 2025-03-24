const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
