const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

let dbConfig;
const localConfigPath = path.join(__dirname, 'local-db-config.json');

// Check if the local config file exists, so I can have a faster feedback loop for api changes (npm start - non-containers)
if (process.env.DB_USER) {
    dbConfig = {  
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
     };
} else {
    
    const localConfig = require(localConfigPath);
    dbConfig = {
        user: localConfig.DB_USER,
        host: localConfig.DB_HOST,
        database: localConfig.DB_NAME,
        password: localConfig.DB_PASSWORD,
        port: localConfig.DB_PORT
    };

}

const pool = new Pool(dbConfig);

exports.query = async (text, params) => {
    const res = await pool.query(text, params);
    return res.rows;
};
