const express = require('express');
const router = express.Router();

// Import the necessary controllers
const { getAllChords, getChordById, createChord, updateChord, deleteChord } = require('../controllers/chordsController');

// Define routes
router.get('/', getAllChords);
router.get('/:id', getChordById);
router.post('/', createChord);
router.put('/:id', updateChord);
router.delete('/:id', deleteChord);

module.exports = router;
