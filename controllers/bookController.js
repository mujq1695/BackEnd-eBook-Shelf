const asyncHandler = require('express-async-handler')

const User = require('../models/usersModel')


// @description  - Get my Book
// @ routes      - GET /myBooks
// @access       - Private
const getBooks = asyncHandler(async(req,res)=>{
    const books = User.find()
    res.send("Books Retrieved Successfully...");
})

// @description  - Add my Book
// @ routes      - POST /addBook
// @access       - Private
const addBook = asyncHandler(async(req,res)=>{
    res.send("Book added Successfully...");
})

// @description  - Edit Book
// @ routes      - PUT /editBook/:bookId
// @access       - Private
const editBook = asyncHandler(async(req,res)=>{
    res.send(`Book Edited Successfully ${req.params.bookId}`);
})

// @description  - Delete Book
// @ routes      - Delete /delBook/:bookId
// @access       - Private
const deleteBook = asyncHandler(async(req,res)=>{
    let bookId=parseInt(req.params.bookId);
    res.send("Book Deleted - "+bookId);
})

module.exports = {
    getBooks,
    editBook,
    deleteBook,
    addBook
}