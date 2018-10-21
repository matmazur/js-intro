angular.module("app")

    .value("appName", "Book Store")
    .constant("version", "0.1")
    .factory("Book", function () {
        function Book(title, author, isbn) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
        }

        return Book;
    })
    .service("bookService", function (Book) {

        this.books = [
     new Book("Moby Dick", "Hemingway", "5425DFSFGsd"),
     new Book("Release the Dick", "Ernest", "sdfsDFD"),
     new Book("Moby", "Moby", "^$%$3433")
];

        this.saveBook = function (book) {
            this.books.push(book);
        }
    });
