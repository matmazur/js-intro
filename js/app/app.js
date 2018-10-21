var app = angular.module('app', []);


app.factory("Book", function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    return Book;
});


app.controller("BookController", function (Book) {


    this.books = [
     new Book("Moby Dick", "Hemingway", "5425DFSFGsd"),
     new Book("Release Dick", "Ernest", "sdfsDFD"),
     new Book("Moby", "Moby", "^$%$3433")
];

    this.addBook = function (book) {
        if (this.book.title!=null && this.book.author!=null){
        this.books.push(new Book(book.title, book.author, book.isbn));

        this.book.title = "";
        this.book.author = "";
        this.book.isbn = "";
    }

    };


});
