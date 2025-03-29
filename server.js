const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3400; // Use the PORT environment variable or default to 3400

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON requests

// Serve static files from the "public" folder
app.use(express.static('public'));

// Load your data
const data = require('./data.json');

// API endpoint to serve the data
app.get('/data', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});