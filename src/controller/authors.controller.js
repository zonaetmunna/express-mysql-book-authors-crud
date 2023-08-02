const authorsModel = require("../model/authors.model");

exports.createAuthor = async (req, res) => {
  const { name, birthdate } = req.body;
  try {
    const authorId = await authorsModel.createAuthor(name, birthdate);
    res.status(201).json({ id: authorId, name, birthdate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await authorsModel.getAllAuthors();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAuthorById = async (req, res) => {
  const authorId = req.params.id;
  try {
    const author = await authorsModel.getAuthorById(authorId);
    res.status(200).json(author);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.updateAuthorById = async (req, res) => {
  const authorId = req.params.id;
  const { name, birthdate } = req.body;
  try {
    const updatedAuthor = await authorsModel.updateAuthorById(
      authorId,
      name,
      birthdate
    );
    res.status(200).json(updatedAuthor);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.deleteAuthorById = async (req, res) => {
  const authorId = req.params.id;
  try {
    await authorsModel.deleteAuthorById(authorId);
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
