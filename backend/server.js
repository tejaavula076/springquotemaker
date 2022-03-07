const express = require("express");
const quotes = require("./data/quotes");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find((n) => n._id === req.params.id);
  res.send(quote);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
