const projectModel = require('../models/projectModel');

exports.findAll = async () => {
    // check user access and filter results?
      const projects = await projectModel.findAll();
  
      return projects;
};
  
exports.findById = async (id) => {
  // check user access and filter results?

    const project = await projectModel.findById(id);

    return project;
};

  