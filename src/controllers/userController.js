const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({ name, email });

  res.status(201).json(user);
};

module.exports = {
  getUsers,
  createUser
};
