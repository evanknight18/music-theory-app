const mongoose = require('mongoose');
const Note = require('./app/models/noteModel');
const Chord = require('./app/models/chordModel');
const Key = require('./app/models/keyModel');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/music_theory_app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    seedData();
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Seed data into the database
const seedData = async () => {
  try {
    // Clear existing data
    await Note.deleteMany();
    await Chord.deleteMany();
    await Key.deleteMany();

    // Create new notes
    const notes = [
      { name: 'C', value: 261.63 },
      { name: 'D', value: 293.66 },
      { name: 'E', value: 329.63 },
      // Add more notes as needed
    ];
    await Note.create(notes);

    // Create new chords
    const chords = [
      { name: 'C Major', notes: ['C', 'E', 'G'] },
      { name: 'D Major', notes: ['D', 'F#', 'A'] },
      { name: 'E Minor', notes: ['E', 'G', 'B'] },
      // Add more chords as needed
    ];
    await Chord.create(chords);

    // Create new keys
    const keys = [
      { name: 'C Major', chords: ['C Major', 'D Minor', 'E Minor', 'F Major', 'G Major', 'A Minor', 'B Diminished'] },
      { name: 'G Major', chords: ['G Major', 'A Minor', 'B Minor', 'C Major', 'D Major', 'E Minor', 'F# Diminished'] },
      // Add more keys as needed
    ];
    await Key.create(keys);

    console.log('Data seeding completed');
    process.exit(0); // Exit the script after seeding data
  } catch (error) {
    console.error('Data seeding failed', error);
    process.exit(1); // Exit the script with an error status code
  }
};
