var app = angular.module('app', []);

app.controller("BookController", function() {

    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }

    this.books = [

    new Book("Moby Dick", "Hemingway", "5425DFSFGsd"),
     new Book("Release Dick", "Ernest", "sdfsDFD"),
     new Book("Moby", "Moby", "^$%$3433")
];



});
