const bugModel = require('../models/bugModel');

exports.createBug = async (bugData) => {
  
    const cleanBugData = bugData;
      // add validation and cleaning

      const newBug = await bugModel.create(cleanBugData);
  
      return newBug;
}
  

  