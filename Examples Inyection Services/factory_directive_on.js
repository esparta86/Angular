var myModule = angular.module('myModule', []);


myModule.factory('mySharedService', function($rootScope) {
    var sharedService = {};

    sharedService.message = '';

    sharedService.prepForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});

myModule.directive('myComponent', function(mySharedService) {
    return {
        restrict: 'E',
        controller: function($scope, $attrs, mySharedService) {
            $scope.$on('handleBroadcast', function() {
                $scope.message = 'Directive: ' + mySharedService.message;
            });
        },
        replace: true,
        template: '<input>'
    };
});

function ControllerZero($scope, mySharedService) {
    $scope.handleClick = function(msg) {
        mySharedService.prepForBroadcast(msg);
    };

    $scope.$on('handleBroadcast', function() {
        $scope.message = mySharedService.message;
    });
}

function ControllerOne($scope, mySharedService) {
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'ONE: ' + mySharedService.message;
    });
}

function ControllerTwo($scope, mySharedService) {
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'TWO: ' + mySharedService.message;
    });
}

ControllerZero.$inject = ['$scope', 'mySharedService'];

ControllerOne.$inject = ['$scope', 'mySharedService'];
