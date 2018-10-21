angular.module("app")

    .controller("BookController", function (Book, bookService) {

        this.books = bookService.books;

        this.addBook = function (book) {
            if (this.book.title != null && this.book.author != null) {

                bookService.saveBook(new Book(book.title, book.author, book.isbn));

                this.book.title = "";
                this.book.author = "";
                this.book.isbn = "";
            }
        };
    })


    .controller("constants", function (appName, version) {

        this.version = version;
        this.appName = appName;

    });
