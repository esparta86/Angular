var moduleParent=angular.module('moduleParent',[]);
moduleParent.config(['$provide',function($provide) {
	
	/*$provide.provider('greeting',function(){
		this.$get=function(){
			return function(name){
					alert("hello"+name);
			};
		}
	});

	*/

	/*
	$provide.factory('greeting', [function(){
		return function name(name){
			 alert("Hello, " + name);
		};
	}]);
	*/

}]);

moduleParent.controller('mainController', ['$scope','greeting', function($scope,greeting){
	$scope.onClick=function(){
		greeting("Ford prefect");
	};
}]);



