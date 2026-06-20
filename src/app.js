const express = require('express');
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the CI/CD pipeline!' });
});

// Define the health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;