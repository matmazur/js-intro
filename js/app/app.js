var app = angular.module('app', []);


app.controller('helloController', function () {
    this.hello = 'hello world from angular';
    this.bye = "goodbye homie";
});




app.controller('clickController', function () {


    this.header = "Starter header";
    this.changeHeader = function () {
        this.header = this.input;
    }



    this.changeCapitalization = function () {

        var character = this.header.charAt(0).toString();
        var characterCapital = this.header.charAt(0).toString().toUpperCase();

        character == characterCapital ?
            this.header = this.header.toLowerCase() :
            this.header = this.header.toUpperCase();

    }
});


app.controller('MouseController', function () {
    this.mouseDown = function () {
        console.log('Mouse down');
    }
    this.mouseUp = function () {
        console.log('Mouse Up');
    }
    this.mouseEnter = function () {
        console.log('Mouse enter');
    }
    this.mouseLeave = function () {
        console.log('Mouse leave');
    }
    this.mouseMove = function () {
        console.log('Mouse move');
    }
    this.mouseOver = function () {
        console.log('Mouse over');
    }
});
