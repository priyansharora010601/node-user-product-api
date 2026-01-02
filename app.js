const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to API");
});

app.listen(3000, () => {
  console.log("Server started");
});
