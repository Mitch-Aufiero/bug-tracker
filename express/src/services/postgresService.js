const { Pool } = require('pg');
const pool = new Pool({  
    user: 'myuser',
    host: 'localhost:5432',
    database: 'tracker',
    password: 'mypassword',
    port: 3211
 });

exports.query = async (text, params) => {
    const res = await pool.query(text, params);
    return res.rows;
};
