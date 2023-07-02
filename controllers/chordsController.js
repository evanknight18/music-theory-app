// Import the necessary modules and models
const Chord = require('../models/chordModel');

// Controller functions for chords
exports.getAllChords = async (req, res) => {
  try {
    const chords = await Chord.find();
    res.json(chords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getChordById = async (req, res) => {
  const id = req.params.id;
  try {
    const chord = await Chord.findById(id);
    if (!chord) {
      return res.status(404).json({ message: 'Chord not found' });
    }
    res.json(chord);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createChord = async (req, res) => {
  const { name, notes } = req.body;
  try {
    const newChord = new Chord({ name, notes });
    const savedChord = await newChord.save();
    res.status(201).json(savedChord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateChord = async (req, res) => {
  const id = req.params.id;
  const { name, notes } = req.body;
  try {
    const updatedChord = await Chord.findByIdAndUpdate(id, { name, notes }, { new: true });
    if (!updatedChord) {
      return res.status(404).json({ message: 'Chord not found' });
    }
    res.json(updatedChord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteChord = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedChord = await Chord.findByIdAndDelete(id);
    if (!deletedChord) {
      return res.status(404).json({ message: 'Chord not found' });
    }
    res.json({ message: 'Chord deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
