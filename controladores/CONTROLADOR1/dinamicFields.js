app = angular.module('myApp',[]);

app.controller('parentCtrl', ['$scope', function parentCtrl ($scope){



  $scope.queryList = [
        { name: 'Check Users', fields: [ "Name", "Id","history","age","city"] },
        { name: 'Audit Report', fields: [] },
        { name: 'Bounce Back Report', fields: [ "Date"] } 
      ];
    $scope.models = {};
    $scope.$watch('selectedQuery', function (newVal, oldVal) {
        if ($scope.selectedQuery) {
            $scope.parameters = $scope.selectedQuery.fields;
        }
    });


   
}]);


app.controller('ShildCtrl', ['$scope', function SiblingOneCtrl($scope){


$scope.test='sxxx';


   
}]);
