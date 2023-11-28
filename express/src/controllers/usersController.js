const userService = require('../services/userService');

exports.getAllusers = async (req, res) => {
  console.log("in controller");
  const users = await userService.findAll();
  res.json(users);
};

exports.getuserById = async (req, res) => {
    const user = await userService.findById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User  not found :(' });
    }
};

