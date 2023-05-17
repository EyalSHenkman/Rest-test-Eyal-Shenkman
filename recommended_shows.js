
const express = require('express');

const app = express();
const port = 3000;

// Define a route that returns a JSON response
app.get('/api/entity', (req, res) => {
  const entity = {
    name: 'Barry',
    genre: 'dark psychological comedy'
  };

  res.json(entity);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
