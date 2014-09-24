var app = angular.module('af', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.html'    
        })
        .when('/details/:index', {
            templateUrl: 'templates/details.html',
            controller: 'DetailController'
        });
})
.controller('ProductController', function ($scope, $http) {
    $http.get('http://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json').success(function(response){
        $scope.products = response.value;
    });     
})
.controller('DetailController', function ($scope, $routeParams) {
    $scope.product = $scope.products[$routeParams.index]; 
});   