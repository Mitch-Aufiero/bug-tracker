const bugModel = require('../models/bugModel');
const bugService = require('../services/bugService');

exports.getAllBugs = async (req, res) => {
    const bugs = await bugModel.findAll();
    res.json(bugs);
};

exports.getBugById = async (req, res) => {
  try {
    const bug = await bugModel.findById(req.params.id);
    res.json(bug); // If bug is found, this line will execute
  } catch (error) {
    // If the bug is not found, an error will be thrown and caught here
    if (error.message.includes('Bug with id')) {
        res.status(404).json({ message: 'Bug not found' });
    } else {
        // Handle other types of errors, like database connection issues
        res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

exports.createBug = async (req, res) =>{
    try {
      console.log(req.body);
        const newBug = await bugService.createBug(req.body);
        res.status(201).json(newBug);
      } catch (error) {
    
        if (error.code === '23505') {  // PostgreSQL duplicate id
          return res.status(409).json({ message: 'Resource already exists.' });
        }
        else {

        console.error('Error during resource creation:', error);  
            return res.status(400).json({ message: error.message });
        }

      }
    };