// external imports
const express = require("express");
const cors = require("cors");
// internal imports
const db = require("./db/db.js");
const bookRoutes = require("./src/routes/book.routes.js");
const authorRoutes = require("./src/routes/authors.routes.js");

// app and port initialize
const app = express();
const port = process.env.PORT || 5000;

// middleware initialize
app.use(cors());
app.use(express.json());

// api routes
app.get("/", (req, res) => {
  res.json("hello");
});

app.use(bookRoutes);
app.use(authorRoutes);

/* 
// Create a new book
app.post("/api/books", (req, res) => {
  const { title, author, price } = req.body;
  const sql = "INSERT INTO books (title, author, price) VALUES (?, ?, ?)";
  db.query(sql, [title, author, price], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, title, author, price });
  });
});

// Get all books
app.get("/api/books", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

// Get a single book by ID
app.get("/api/books/:id", (req, res) => {
  const bookId = req.params.id;
  const sql = "SELECT * FROM books WHERE id = ?";
  db.query(sql, [bookId], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.status(200).json(result[0]);
    }
  });
});

// Update a book by ID
app.put("/api/books/:id", (req, res) => {
  const bookId = req.params.id;
  const { title, author, price } = req.body;
  const sql = "UPDATE books SET title = ?, author = ?, price = ? WHERE id = ?";
  db.query(sql, [title, author, price, bookId], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.status(200).json({ id: bookId, title, author, price });
    }
  });
});

// Delete a book by ID
app.delete("/api/books/:id", (req, res) => {
  const bookId = req.params.id;
  const sql = "DELETE FROM books WHERE id = ?";
  db.query(sql, [bookId], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.status(200).json({ message: "Book deleted successfully" });
    }
  });
});
 */
// port declaration
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
