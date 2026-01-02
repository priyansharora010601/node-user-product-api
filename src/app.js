const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("User Product API is running 🚀");
});

module.exports = app;
