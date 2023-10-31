const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true });

// Body parser middleware
app.use(bodyParser.json());

// API Routes
app.use('/api/books', require('./routes/Book_routes'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
