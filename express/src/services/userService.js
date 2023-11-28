const userModel = require('../models/userModel');

exports.findAll = async () => {


      const users = await userModel.findAll();
  
      return users;
};
  
exports.findById = async (id) => {
  // check access

    const user = await userModel.findById(id);

    return user;
};

  