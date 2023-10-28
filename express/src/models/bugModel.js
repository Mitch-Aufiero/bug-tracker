const dbService = require('../utils/postgresService');

exports.findAll = async () => {
    return dbService.query('SELECT * FROM bugs');
};

exports.findById = async (id) => {
    const result = dbService.query('SELECT * FROM bugs WHERE id = ?', [id]);
    if (!result.rows[0]) {
        console.log("Could not find bug")
        throw new Error('Bug not found')
    };
    return result;
};

exports.create = async(bugData) => {// should probably use the active record pattern
    const result = await db.query(
        `INSERT INTO bugs (title, description, status, severity, type, project_id, reported_by, assigned_to)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *`, 
        [bugData.title, bugData.description, bugData.status, bugData.severity, bugData.type, bugData.projectId, bugData.reportedBy, bugData.assignedTo]
      );

        console.log(result);
      return result;
}