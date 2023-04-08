const asyncHandler = require("express-async-handler");

const Book = require("../models/booksModel");
const User = require("../models/usersModel")

const getPublic = asyncHandler(async (req, res) => {
  const books = await Book.find({ access: "public", user: req.user.id });
  
  if (!books) {
    res.status(400).json({ message: "Book Not Found" });
  }
  res.send(books);
});

const getPrivate = asyncHandler(async (req, res) => {
  const books = await Book.find({ access: "private", user: req.user.id  });
  if (!books) {
    res.status(400).json({ message: "Booknn Not Found" });
  }
  res.status(200).send(books)
});
// @description  - Get my Book
// @ routes      - GET /myBooks
// @access       - Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({user: req.user.id});
  if (!books) {
    res.status(400).json({ message: "Book not found" });
  }
  res.status(200).json({message:"Books Retrieved Successfully...",books:books});
});

// @description  - Add my Book
// @ routes      - POST /addBook
// @access       - Private
const addBook = asyncHandler(async (req, res) => {
  console.log("req.body", req.body)
  const { title, author, access, description, ISBN, category  } = req.body;
  console.log(req.user.id)
  if (!title || !author || !access || !description || !ISBN || !category ) {
    res.status(400).json({ message: "Please add all Book fields" });
  }else{
  const books = await Book.create({
    user: req.user.id,
    title:title,
    access:access,
    author:author,
    description:description,
    ISBN:ISBN,
    category: category,
    
  });
  res.status(200).json({message:"Book added successfully"+books})
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

    const loggedUser = await User.findById(req.user.id);

    if(!loggedUser){
        res.status(400).json({message:"User Not Found"})
    }

    // Check if user is not updateing other user's book
    // Check if Logged in User Id matches the Book's user Id 
    if(book.user.toString() !== loggedUser.id){
        res.status(401).json({message:"X_X_X Not Authorized X_X_X"})
    }
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.bookId,
      req.body,
      { new: true }
    );
    res.send({Book_Edited_Successfully:updatedBook});
  }
});

// @description  - Delete Book
// @ routes      - Delete /delBook/:bookId
// @access       - Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  if (!book) {
    res.status(400).json({ message: "Book Not Found!" });
  } else {

    const loggedUser = await User.findById(req.user.id);
    if(!loggedUser){
        res.status(400).json({message:"User Not Found"})
    } 

    if(book.user.toString() !== loggedUser.id){
        res.status(400).json({message:"X_X_X Not Authorized X_X_X"});
    }else{await Book.findByIdAndDelete(req.params.bookId);
    res.send(`Book Deleted Successfully ${req.params.bookId}`);}
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
