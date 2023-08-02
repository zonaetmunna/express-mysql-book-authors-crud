const db = require("../../db/db");

class AuthorModel {
  createAuthor(name, birthdate) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO authors (name, birthdate) VALUES (?, ?)";
      db.query(sql, [name, birthdate], (err, result) => {
        if (err) reject(err);
        resolve(result.insertId);
      });
    });
  }

  getAllAuthors() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM authors";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  getAuthorById(authorId) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM authors WHERE id = ?";
      db.query(sql, [authorId], (err, result) => {
        if (err) reject(err);
        if (result.length === 0) {
          reject(new Error("Author not found"));
        } else {
          resolve(result[0]);
        }
      });
    });
  }
  updateAuthorById(authorId, name, birthdate) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE authors SET name = ?, birthdate = ? WHERE id = ?";
      db.query(sql, [name, birthdate, authorId], (err, result) => {
        if (err) reject(err);
        if (result.affectedRows === 0) {
          reject(new Error("Author not found"));
        } else {
          resolve({ id: authorId, name, birthdate });
        }
      });
    });
  }

  deleteAuthorById(authorId) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM authors WHERE id = ?";
      db.query(sql, [authorId], (err, result) => {
        if (err) reject(err);
        if (result.affectedRows === 0) {
          reject(new Error("Author not found"));
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = new AuthorModel();
