const dbService = require('../utils/postgresService');

exports.findAll = async () => {
    return dbService.query('SELECT * FROM projects');
};

exports.findById = async (id) => {
    const result = dbService.query('SELECT * FROM projects WHERE project_id = ?', [id]);
    if (!result.rows[0]) {
        console.log("Could not find project")
        throw new Error('Project not found')
    };
    return result;
};