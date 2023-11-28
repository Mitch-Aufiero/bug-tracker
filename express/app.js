const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // Allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
  credentials: true  // Allow cookies and sessions to be sent with requests
}));

app.use(express.json())

// Import routes
const bugsRoute = require('./src/routes/bugs'); 
const projectsRoute = require('./src/routes/projects'); 
const usersRoute = require('./src/routes/users'); 

// Use routes
app.use('/bugs', bugsRoute);
app.use('/projects',projectsRoute);
app.use('/users', usersRoute);

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

module.exports = server