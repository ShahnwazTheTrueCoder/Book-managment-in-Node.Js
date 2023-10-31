const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', (req, res) => {
  Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Create a new book
router.post('/', (req, res) => {
  const newBook = new Book(req.body);

  newBook
    .save()
    .then((book) => {
      res.status(201).json(book);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

// Get a single book by ID
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        res.json(book);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Update a book by ID
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((book) => {
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        res.json(book);
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then((book) => {
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        res.json({ message: 'Book deleted' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
