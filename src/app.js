const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// User routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("User Product API is running 🚀");
});

const errorHandler = require("./middlewares/errorMiddleware");

app.use(errorHandler);

module.exports = app;
