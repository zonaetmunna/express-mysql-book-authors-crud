const Book = require("../model/book.model");

exports.createBook = (req, res) => {
  const { title, authorId, price } = req.body;
  Book.create(title, authorId, price, (err, book) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to add the book" });
    } else {
      res.status(201).json(book);
    }
  });
};

exports.getAllBooks = (req, res) => {
  Book.findAll((err, books) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch books" });
    } else {
      res.status(200).json(books);
    }
  });
};

exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.findById(bookId, (err, book) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch the book" });
    } else {
      if ("message" in book) {
        res.status(404).json(book);
      } else {
        res.status(200).json(book);
      }
    }
  });
};

exports.updateBook = (req, res) => {
  const bookId = req.params.id;
  const { title, authorId, price } = req.body;
  Book.update(bookId, title, authorId, price, (err, book) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update the book" });
    } else {
      if ("message" in book) {
        res.status(404).json(book);
      } else {
        res.status(200).json(book);
      }
    }
  });
};

exports.deleteBook = (req, res) => {
  const bookId = req.params.id;
  Book.delete(bookId, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to delete the book" });
    } else {
      if ("message" in result) {
        res.status(404).json(result);
      } else {
        res.status(200).json(result);
      }
    }
  });
};
