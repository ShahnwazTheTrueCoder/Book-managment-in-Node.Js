const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedDate: Date,
  summary: String,
});

module.exports = mongoose.model('Book', bookSchema);
