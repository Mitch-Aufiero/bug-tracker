const dbService = require('../utils/postgresService');

exports.findAll = async () => {
    return dbService.query('SELECT * FROM Users');
};

exports.findById = async (id) => {
    const result = dbService.query('SELECT * FROM Users WHERE user_id = ?', [id]);
    if (!result.rows[0]) {
        console.log("Could not find user")
        throw new Error('user not found')
    };
    return result;
};