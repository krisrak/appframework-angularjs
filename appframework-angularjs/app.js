(function () {
    var app = angular.module('af', []);

    app.controller('ProductController', function ($scope, $http) {

        $http.get('http://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json').success(function(response){
            $scope.products = response.value;
        });

        $scope.getDetails = function(index){
            $scope.product = $scope.products[index];
        }       
    });   
})();