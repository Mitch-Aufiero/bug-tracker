const { Pool } = require('pg');
const pool = new Pool({  
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
 });


exports.query = async (text, params) => {
    const res = await pool.query(text, params);
    return res.rows;
};
