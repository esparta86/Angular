var app = angular.module('herencia',[]);
app.controller('ParentCtrl', ['$scope', function($scope){

$scope.attributeA = "A";	

$scope.methoA = function(){

	return "A";
};

}]);

app.controller('childCtrl', ['$scope','$controller', function($scope,$controller){
/*$controller('ParentCtrl', {$scope:$scope});¨*/
$scope.attributeB = "B";
$scope.methodB = function(){
	console.log("something");
	return "B";
};


}])