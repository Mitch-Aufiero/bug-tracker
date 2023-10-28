const bugModel = require('../models/bugModel');
const bugService = require('../services/bugService');

exports.getAllBugs = async (req, res) => {
    const bugs = await bugModel.findAll();
    res.json(bugs);
};

exports.getBugById = async (req, res) => {
    const bug = await bugModel.findById(req.params.id);
    if (bug) {
        res.json(bug);
    } else {
        res.status(404).json({ message: 'Bug not found' });
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