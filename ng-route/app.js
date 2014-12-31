 var sampleApp=angular.module('sampleApp',[]);


sampleApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when('/AddNewOrder',{
        templateUrl:'add_order.html',
        controller :'AddOrderController'
    }).
    when('/ShowOrders',{
        templateUrl:'show_orders.html',
        controller:'ShowOrdersController'
    }).
    otherwise({
        redirecTo:'/AddNewOrder'
    });
}]);


sampleApp.controller('AddOrderController', ['$scope', function($scope){
    $scope.message='this is a add order screen';
}]);


sampleApp.controller('ShowOrdersController', ['$scope', function($scope){
    $scope.message="this is a show orders screen ";
}]);