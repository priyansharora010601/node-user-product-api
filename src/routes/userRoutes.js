const express = require("express");
const router = express.Router();
const {getUsers,createUser} = require("../controllers/userController");
const protect = require("../middlewares/authMiddleware");


// GET all users
router.get("/", protect, getUsers);

// CREATE user
router.post("/", protect, createUser);

module.exports = router;
