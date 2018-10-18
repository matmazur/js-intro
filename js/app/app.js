var app = angular.module('app', []);




app.controller('helloController',["$scope", function ($scope) {
    $scope.hello = 'hello world from angular';
    $scope.bye = "goodbye homie";
}]);
