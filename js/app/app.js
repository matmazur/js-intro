var app = angular.module('app', []);


app.controller('helloController', function () {
    this.hello = 'hello world from angular';
    this.bye = "goodbye homie";
});


// can be written down as
// 
// app.controller('helloController',hello());
//
// function hello(){
//this.hello = "hello darling";
//}



app.controller('clickController', function () {
    this.header = "starter header";
    this.changeHeader = function () {
        this.header = this.input;
    }
    this.capitalize = function () {
        this.header = this.header.toUpperCase();
    }
     this.unCapitalize = function () {
        this.header = this.header.toLowerCase();
    }

});
