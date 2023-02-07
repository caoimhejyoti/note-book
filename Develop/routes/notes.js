const notes = require('express').Router();
const uuid = require('./../helpers/uuid');
const fs = require('fs');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
  
// GET Route for a specific note
notes.get('/:note_id', (req, res) => {
const noteId = req.params.note_id;
readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
    const result = json.filter((note) => note.note_id === noteId);
    return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    });
});
  
//FIXME: not currently deleting object from Array. 
// DELETE Route for a specific note
notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
        // Make a new array of all notes except the one with the ID provided in the URL
        const result = json.filter((note) => note.note_id !== noteId);

        // Save that array to the filesystem
        writeToFile('./db/db.json', result);

        // Respond to the DELETE request
        res.json(`Item ${noteId} has been deleted 🗑️`);
        });
});


// POST Route for a new note
notes.post('/', (req, res) => {
    console.log(req.body);
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
        title,
        text,
        note_id: uuid(),
        };

    //     readAndAppend(newNote, './db/db.json');
    //     res.json(`Note added successfully 🚀`);
    // } else {
    //     res.error('Error in adding note');
    // }

    // Obtain existing notes
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Convert string into JSON object
          const parsedNotes = JSON.parse(data);
  
          // Add new note
          parsedNotes.push(newNote);
  
          // Write updated notes back to the file
          fs.writeFile(
            './db/db.json',
            JSON.stringify(parsedNotes, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully saved note!')
          );
        }
      });
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in saving note');
    }
});



module.exports = notes;
