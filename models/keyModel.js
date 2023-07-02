const mongoose = require('mongoose');

const keySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  chords: {
    type: [String],
    required: true
  }
});

const Key = mongoose.model('Key', keySchema);

module.exports = Key;
