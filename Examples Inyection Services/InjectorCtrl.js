function CarController($scope) {
 
    $scope.name = 'Car';
    $scope.type = 'Car';
 
    $scope.clickme = function() {
        
        $scope.retrieve2=this.name2;
        $scope.retrieve3=this.name3;
        alert('This is parent controller "CarController" calling, the bellow data is from child '+$scope.retrieve2+" | "+$scope.retrieve3);
    }

}

function BMWController($scope, $injector) {
    
    $injector.invoke(CarController, this, {$scope: $scope});
    
    $scope.name = 'BMW';
    $scope.name2= 'nameTest2';
    $scope.name3= 'nameTest3';
 
}