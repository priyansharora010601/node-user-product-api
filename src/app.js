const express = require("express");

const app = express();

// Middleware
app.use(express.json());


// User routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


// Base route
app.get("/", (req, res) => {
  res.send("User Product API is running 🚀");
});

module.exports = app;
