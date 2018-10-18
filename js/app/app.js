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
