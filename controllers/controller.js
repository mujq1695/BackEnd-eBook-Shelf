// @description  - Get my Book
// @ routes      - GET /myBooks
// @access       - Private
const getBooks = (req,res)=>{
    res.send("Books Retrieved Successfully...");
}

// @description  - Add my Book
// @ routes      - POST /addBook
// @access       - Private
const addBook = (req,res)=>{
    res.send("Book added Successfully...");
}

// @description  - Edit Book
// @ routes      - PUT /editBook/:bookId
// @access       - Private
const editBook = (req,res)=>{
    res.send(`Book Edited Successfully ${req.params.bookId}`);
}

// @description  - Delete Book
// @ routes      - Delete /delBook/:bookId
// @access       - Private
const deleteBook = (req,res)=>{
    let bookId=parseInt(req.params.bookId);
    res.send("Book Deleted - "+bookId);
}

module.exports = {
    getBooks,
    editBook,
    deleteBook,
    addBook
}