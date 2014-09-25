var app = angular.module('af', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/list', {
            templateUrl: 'templates/list.html'    
        })
        .when('/grid', {
            templateUrl: 'templates/grid.html'    
        })
        .when('/cards', {
            templateUrl: 'templates/cards.html'    
        })
        .otherwise({redirectTo: '/list'});
})
.controller('ProductController', function ($scope, $http) {
    $http.get('http://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json').success(function(response){
        $scope.products = response.value;
    });     
});   