// Import the necessary modules and models
const Key = require('../models/keyModel');

// Controller functions for keys
exports.getAllKeys = async (req, res) => {
  try {
    const keys = await Key.find();
    res.json(keys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getKeyById = async (req, res) => {
  const id = req.params.id;
  try {
    const key = await Key.findById(id);
    if (!key) {
      return res.status(404).json({ message: 'Key not found' });
    }
    res.json(key);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createKey = async (req, res) => {
  const { name, chords } = req.body;
  try {
    const newKey = new Key({ name, chords });
    const savedKey = await newKey.save();
    res.status(201).json(savedKey);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateKey = async (req, res) => {
  const id = req.params.id;
  const { name, chords } = req.body;
  try {
    const updatedKey = await Key.findByIdAndUpdate(id, { name, chords }, { new: true });
    if (!updatedKey) {
      return res.status(404).json({ message: 'Key not found' });
    }
    res.json(updatedKey);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteKey = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedKey = await Key.findByIdAndDelete(id);
    if (!deletedKey) {
      return res.status(404).json({ message: 'Key not found' });
    }
    res.json({ message: 'Key deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
