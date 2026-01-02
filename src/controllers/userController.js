const getUsers = (req, res) => {
    res.json({
      message: "Users fetched successfully",
      users: []
    });
  };
  
  const createUser = (req, res) => {
    const { name, email } = req.body;
  
    res.status(201).json({
      message: "User created successfully",
      user: { name, email }
    });
  };
  
  module.exports = {
    getUsers,
    createUser
  };
  