app = angular.module('Observador',[]);

app.controller('WatchCtrl', ['$scope', function WatchCtrl ($scope){

$scope.operators={
    "value":"suma",
    "values":["suma","resta","multiplicacion","divicion"]
} ;
$scope.selectorOperator=$scope.operators.value;

$scope.$watch(function(newVal,oldVal){
    
     if($scope.operators.value){
        switch($scope.operators.value)
        {
             case "suma":
             $scope.resultado=parseInt($scope.first)+parseInt($scope.second);
             break;
             case "resta":
             $scope.resultado=parseInt($scope.first)-parseInt($scope.second);
             break;
             case "multiplicacion":
             $scope.resultado=parseInt($scope.first)*parseInt($scope.second);
             break;
             case "divicion":
             $scope.resultado=parseInt($scope.first)/parseInt($scope.second);
             break;
        }
    }

});


   
}]);



