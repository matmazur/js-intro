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


    this.header = "Starter header";
    this.changeHeader = function () {
        this.header = this.input;
    }



    this.changeCapitalization = function () {

        var character = this.header.charAt(0).toString();
        var characterCapital = this.header.charAt(0).toString().toUpperCase();

        console.log(character);
        console.log(characterCapital);

        character == characterCapital ?
            this.header = this.header.toLowerCase() :
            this.header = this.header.toUpperCase();


    }



});
