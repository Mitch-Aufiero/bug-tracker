const bugModel = require('../models/bugModel');

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
