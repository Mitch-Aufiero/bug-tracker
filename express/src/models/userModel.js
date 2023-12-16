const dbService = require('../utils/postgresService');

exports.findAll = async () => {
    return dbService.query('SELECT * FROM Users');
};

exports.findById = async (id) => {
    const result = dbService.query('SELECT * FROM Users WHERE user_id = ?', [id]);
    if (Array.isArray(result) && result.length === 0) {
        console.log("Could not find user")
        throw new Error('user not found')
    };
    return result;
};