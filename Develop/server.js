const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index');

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

// HTML ROUTES --------------------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
