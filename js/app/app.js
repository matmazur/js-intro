var app = angular.module('app', []);




app.controller('helloController', function ($scope) {
$scope.hello = 'hello world from angular';
    $scope.bye = "goodbye homie";
});
