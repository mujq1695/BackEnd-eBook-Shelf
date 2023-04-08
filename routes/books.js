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
const {protect} = require('../middleware/authMiddleware.js')

router.get("/", (req, res) => {
  res.send("Routes Connected Successfully...");
});

router.get('/publicBooks',protect ,getPublic);

router.get('/privateBooks',protect , getPrivate);

router.get("/myBooks",protect, getBooks);

router.post("/addBook", protect, addBook);

router.put("/editBook/:bookId", protect, editBook);

router.delete("/delBook/:bookId", protect, deleteBook);

module.exports = router;
