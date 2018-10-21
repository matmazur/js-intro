var app = angular.module('app', []);


app.service("Book", function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    
    this.create = function(title,author,isbn){
        return new Book(title,author,isbn);
    }
});


app.controller("BookController", function (Book) {

    
      console.log(Book);

    this.books = [
    Book.create("Moby Dick", "Hemingway", "5425DFSFGsd"),
     Book.create("Release the Dick", "Ernest", "sdfsDFD"),
     Book.create("Moby", "Moby", "^$%$3433")
];

    this.addBook = function (book) {
        if (this.book.title!=null && this.book.author!=null){
        this.books.push( Book.create(book.title, book.author, book.isbn));

        this.book.title = "";
        this.book.author = "";
        this.book.isbn = "";
    }

    };


});
