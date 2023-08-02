const express = require("express");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controller/book.controller");
const router = express.Router();

// Create a new book
router.post("/api/books", createBook);

// Get all books
router.get("/api/books", getAllBooks);

// Get a single book by ID
router.get("/api/books/:id", getBookById);

// Update a book by ID
router.put("/api/books/:id", updateBook);

// Delete a book by ID
router.delete("/api/books/:id", deleteBook);

module.exports = router;
