const express = require("express");
const router = express.Router();
const path = require("path");
const {
  getBooks,
  editBook,
  deleteBook,
  addBook,
  getPublic,
  getPrivate,

} = require("../controllers/bookController.js");

router.get("/", (req, res) => {
  res.send("Routes Connected Successfully...");
});

router.get('/publicBooks',getPublic);

router.get('/privateBooks', getPrivate);

router.get("/myBooks", getBooks);

router.post("/addBook", addBook);

router.put("/editBook/:bookId", editBook);

router.delete("/delBook/:bookId", deleteBook);

module.exports = router;
