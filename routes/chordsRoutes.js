const express = require('express');
const router = express.Router();

// Import the necessary controllers
const { getAllChords, getChordById, createChord, updateChord, deleteChord } = require('../controllers/chordsController');

// Define routes
router.get('/render', (req, res) => {
  const chords = [
    { name: 'C Major', notes: ['C', 'E', 'G'] },
    { name: 'G Major', notes: ['G', 'B', 'D'] },
    { name: 'D Major', notes: ['D', 'F#', 'A'] },
    // ... other chord objects
  ];

  res.render('chords', { chords });
});

router.get('/', getAllChords);
router.get('/:id', getChordById);
router.post('/', createChord);
router.put('/:id', updateChord);
router.delete('/:id', deleteChord);

module.exports = router;
