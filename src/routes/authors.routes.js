const express = require("express");
const router = express.Router();
const {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById,
} = require("../controller/authors.controller");

router.post("/api/authors", createAuthor);
router.get("/api/authors", getAllAuthors);
router.get("/api/authors/:id", getAuthorById);
router.put("/api/authors/:id", updateAuthorById);
router.delete("/api/authors/:id", deleteAuthorById);

module.exports = router;
