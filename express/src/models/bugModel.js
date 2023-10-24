const dbService = require('../services/postgresService');

exports.findAll = async () => {
    return dbService.query('SELECT * FROM bugs');
};

exports.findById = async (id) => {
    return dbService.query('SELECT * FROM bugs WHERE id = ?', [id]);
};
