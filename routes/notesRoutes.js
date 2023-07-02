const express = require('express');
const router = express.Router();

// Import the necessary controllers
const { getAllNotes, getNoteById, createNote, updateNote, deleteNote } = require('../controllers/notesController');

// Define routes
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
