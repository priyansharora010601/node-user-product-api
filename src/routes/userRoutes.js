const express = require("express");
const router = express.Router();
const {getUsers,createUser} = require("../controllers/userController");
const protect = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware");


// GET all users
router.get("/", protect, authorize(["admin", "user"]), getUsers);

// CREATE user
router.post("/", protect, authorize(["admin"]), createUser);

module.exports = router;
