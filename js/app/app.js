var app = angular.module('app', []);

app.value("appName","Book Store");
app.constant("version","0.1");

app.factory("Book", function () {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    return Book;
});


app.service("bookService", function (Book) {

    this.books = [
     new Book("Moby Dick", "Hemingway", "5425DFSFGsd"),
     new Book("Release the Dick", "Ernest", "sdfsDFD"),
     new Book("Moby", "Moby", "^$%$3433")
];

    this.saveBook = function (book) {
        this.books.push(book);
    }
});


app.controller("BookController", function (Book, bookService) {

    this.books = bookService.books;

    this.addBook = function (book) {
        if (this.book.title != null && this.book.author != null) {

            bookService.saveBook(new Book(book.title, book.author, book.isbn));

            this.book.title = "";
            this.book.author = "";
            this.book.isbn = "";
        }
    };
});


app.controller("constants",function(appName,version){
   
    this.version=version;
    this.appName=appName;
    
});