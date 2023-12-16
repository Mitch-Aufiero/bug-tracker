const dbService = require('../utils/postgresService');

exports.findAll = async () => {
    return dbService.query('SELECT * FROM bugs');
};

exports.findById = async (id) => {
    try {
        const result = await dbService.query('SELECT * FROM bugs WHERE bug_id = $1', [id]);
        if (Array.isArray(result) && result.length === 0) {
            console.log("Could not find bug by id: ", id);
            throw new Error(`Bug with id ${id} not found`);
        } else {
            // Bug found
            console.log("Bug found:", result);
            return result; // result is the array of bugs
        }
        
    } catch (error) {
        console.log("Error in findByID:", error);
        throw error;
    }
};

exports.create = async(bugData) => {// should probably use the active record pattern
    const result = await dbService.query(
        `INSERT INTO bugs (title, description, status, severity, type, project_id, reported_by, assigned_to)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *`, 
        [bugData.title, bugData.description, bugData.status, bugData.severity, bugData.type, bugData.project_id, bugData.reportedBy, bugData.assignedTo]
      );
      return result;
}