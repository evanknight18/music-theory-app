const mongoose = require('mongoose');

const chordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  notes: {
    type: [String],
    required: true
  }
});

const Chord = mongoose.model('Chord', chordSchema);

module.exports = Chord;
