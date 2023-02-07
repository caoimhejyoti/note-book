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

// API ROUTES --------------------------------

// GET request for notes
// app.get('/notes', (req, res) =>  {
//   // Send a message to the client
//   res.json(`${req.method} request received to get notes`);

//   // Log our request to the terminal
//   console.info(`${req.method} request received to get notes - console req`);
// });

// POST request to save a note
// app.post('/notes', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a note`);

//   // Destructuring assignment for the items in req.body
//   const { title, text } = req.body;

//   // If all the required properties are present
//   if (title && text) {
//     // Variable for the object we will save
//     const newNote = {
//       title,
//       text,
//       note_id: uuid()
//     };

//     // Obtain existing notes
//     fs.readFile('./db/db.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // Convert string into JSON object
//         const parsedNotes = JSON.parse(data);

//         // Add new note
//         parsedNotes.push(newNote);

//         // Write updated notes back to the file
//         fs.writeFile(
//           './db/db.json',
//           JSON.stringify(parsedNotes, null, 4),
//           (writeErr) =>
//             writeErr
//               ? console.error(writeErr)
//               : console.info('Successfully saved note!')
//         );
//       }
//     });

//     const response = {
//       status: 'success',
//       body: newNote,
//     };

//     console.log(response);
//     res.status(201).json(response);
//   } else {
//     res.status(500).json('Error in saving note');
//   }
// });

// DELET request to save a note
// app.delete('/notes/:id', (req, res) => {
//   // Log that a DELETE request was received
//   console.info(`${req.method} request received to DELETE a note`);

//   res.send('DELETE request to notes')

// });


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
