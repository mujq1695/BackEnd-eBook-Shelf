const asyncHandler = require("express-async-handler");

const Book = require("../models/usersModel");

const getPublic = asyncHandler(async (req, res) => {
  const books = await Book.find({ access: "public" });
  res.send(books);
  if (!books) {
    res.status(400).json({ message: "Book Not Found" });
  }
});

const getPrivate = asyncHandler(async (req, res) => {
  const books = await Book.find({ access: "private" });
  if (!books) {
    res.status(400).json({ message: "Book Not Found" });
  }
});
// @description  - Get my Book
// @ routes      - GET /myBooks
// @access       - Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  if (!books) {
    res.status(400).json({ message: "Book not found" });
  }
  res.send("Books Retrieved Successfully...");
});

// @description  - Add my Book
// @ routes      - POST /addBook
// @access       - Private
const addBook = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Please enter a data" });
  } else {
    const books = await Book.create({
      title: req.body.title,
      access: req.body.access,
      aurthor: req.body.aurthor,
      description: req.body.description,
      
    });
  }
});

// @description  - Edit Book
// @ routes      - PUT /editBook/:bookId
// @access       - Private
const editBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  if (!book) {
    res.status(400).json({ message: "Book not found" });
  } else {
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body,{new:true});
    res.send(`Book Edited Successfully ${updatedBook}`);
  }
});

// @description  - Delete Book
// @ routes      - Delete /delBook/:bookId
// @access       - Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  if(!book){
      res.status(400).json({message:"Book Not Found!"})
  }else{
    await Book.findByIdAndDelete(req.params.bookId);
  res.send(`Book Deleted Successfully ${req.params.bookId}`);
}
});

module.exports = {
  getBooks,
  editBook,
  deleteBook,
  addBook,
  getPublic,
  getPrivate,
};
