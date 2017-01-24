// Return model
var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function (callback, limit) {
    Book.find(callback).limit(limit);
}
// Get BookById
module.exports.getBookById = function (id, callback) {
    Book.findById(id, callback);
}
// Add Book
module.exports.addBook = function (book, callback) {
    Book.create(book, callback);
}

// Update Book
module.exports.updateBook = function (id, book, options, callback) {
    var query = { _id: id };
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}