const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // Allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
  credentials: true  // Allow cookies and sessions to be sent with requests
}));

// Import routes
const bugsRoute = require('./src/routes/bugs'); 

// Use routes
app.use('/bugs', bugsRoute);

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
});

module.exports = server