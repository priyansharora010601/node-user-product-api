const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser
} = require("../controllers/userController");

// GET all users
router.get("/", getUsers);

// CREATE user
router.post("/", createUser);

module.exports = router;
