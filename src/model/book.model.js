const db = require("../../db/db");

class Book {
  static create(title, authorId, price, callback) {
    const sql = "INSERT INTO books (title, author_id, price) VALUES (?, ?, ?)";
    db.query(sql, [title, authorId, price], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, { id: result.insertId, title, authorId, price });
    });
  }

  static findAll(callback) {
    const sql = "SELECT * FROM books";
    db.query(sql, (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  }

  static findById(bookId, callback) {
    const sql = "SELECT * FROM books WHERE id = ?";
    db.query(sql, [bookId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      if (result.length === 0) {
        return callback(null, { message: "Book not found" });
      }
      return callback(null, result[0]);
    });
  }

  static update(bookId, title, authorId, price, callback) {
    const sql =
      "UPDATE books SET title = ?, author_id = ?, price = ? WHERE id = ?";
    db.query(sql, [title, authorId, price, bookId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      if (result.affectedRows === 0) {
        return callback(null, { message: "Book not found" });
      }
      return callback(null, { id: bookId, title, authorId, price });
    });
  }

  static delete(bookId, callback) {
    const sql = "DELETE FROM books WHERE id = ?";
    db.query(sql, [bookId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      if (result.affectedRows === 0) {
        return callback(null, { message: "Book not found" });
      }
      return callback(null, { message: "Book deleted successfully" });
    });
  }
}

module.exports = Book;
