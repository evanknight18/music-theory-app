const express = require('express');
const router = express.Router();

// Import the necessary controllers
const { getAllKeys, getKeyById, createKey, updateKey, deleteKey } = require('../controllers/keysController');

// Define routes
router.get('/', getAllKeys);
router.get('/:id', getKeyById);
router.post('/', createKey);
router.put('/:id', updateKey);
router.delete('/:id', deleteKey);

module.exports = router;
