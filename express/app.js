const express = require('express');
const app = express();

// Import routes
const bugsRoute = require('./src/routes/bugs'); 

// Use routes
app.use('/bugs', bugsRoute);

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server