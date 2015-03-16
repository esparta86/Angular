/**
*  Module
*
* Description
*/
( function(){
var app = angular.module('angularJSModule', []);
app.constant('logging_config',{
  traceLevel:{
  	_LOG_TRACE:'_LOG_TRACE',
  	_LOG_DEBUG:'_LOG_DEBUG',
  	_LOG_INFO :'_LOG_INFO'
  }
});
app.controller('parentCtrl', ['$scope','logging_config', function($scope,logging_config){
  /*todas los atributos declaradados fuera de un metodo y metodo son alcanzables en el scope child*/
	$scope.testParentAttribute = 4; 
	$scope.initParentCtrl = function(){
         $scope.parentattribute  = "Initialize attribute parentCtrl";
	};

}]);

app.controller('childCtrl', ['$scope','$controller', function($scope,$controller){

	$controller('parentCtrl', {$scope:$scope});

	$scope.initChildCtrl = function(){
		$scope.childattribute =" Initialize attribute  childCtrol ";
	};
	
}])

})();