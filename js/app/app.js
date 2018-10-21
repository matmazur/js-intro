var app = angular.module('app', []);


app.controller('helloController', function () {
    this.hello = 'hello world from angular';
    this.bye = "goodbye homie";
});

app.controller("HrefController", function () {


    this.movies = [
        'b-Cr0EWwaTk',
        'zg79C7XM1Xs'
    ];
    this.imgSrc = [
        'https://mbtskoudsalg.com/explore/example-stamp-png/#gal_post_4538_example-stamp-png-5.png', 'https://res.cloudinary.com/demo/w_200,h_200,c_fill/basketball_shot.jpg',
        'http://www.quirksmode.org/mobile/pix/viewport/mobile_visualviewport.jpg'
]
});

app.controller("ShowHideController", function () {

});


app.controller('RepeatController', function () {
    
    this.header= "Story about a thing and some stuff"
    
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    this.people = [
        new Person("Jack", "Stronk"),
    new Person("Jonah", "Heel"),
    new Person("Mike", "Scaramucci")
    ];


    this.changeToRed = function () {
        this.redStyle = {
            'color': 'red'
        };
        this.isRed=true;
    }
    
      this.changeToBlue = function () {
        this.blueStyle = {
            'color': 'blue'
        };
        this.isRed=false;
    }

    this.isRed=false;

    this.odd = "odd";
    this.even = "even";

});
