// Import the necessary modules and routes
const express = require('express');
const router = express.Router();
const notesRoutes = require('./notesRoutes');
const chordsRoutes = require('./chordsRoutes');
const keysRoutes = require('./keysRoutes');

// Register the routes
router.use('/notes', notesRoutes);
router.use('/chords', chordsRoutes);
router.use('/keys', keysRoutes);

module.exports = router;
