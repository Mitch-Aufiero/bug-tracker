const projectService = require('../services/projectService');

exports.getAllProjects = async (req, res) => {
  console.log("in controller");
  const projects = await projectService.findAll();
  res.json(projects);
};

exports.getProjectById = async (req, res) => {
    const project = await projectService.findById(req.params.id);
    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ message: 'Project not found 🐼' });
    }
};

