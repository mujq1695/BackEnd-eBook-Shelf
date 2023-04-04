const express = require("express");
const router = express.Router();
const path = require("path");
const {
  getBooks,
  editBook,
  deleteBook,
  addBook,
} = require("../controllers/bookController.js");

router.get("/", (req, res) => {
  res.send("Routes Connected Successfully...");
});

router.get("/myBooks", getBooks);

router.post("/addBook", addBook);

router.put("/editBook/:bookId", editBook);

router.delete("/delBook/:bookId", deleteBook);

module.exports = router;
