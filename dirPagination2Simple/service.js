angular.module('jsonService',['ngResource'])
.factory('JsonService', ['$resource', function($resource){
	return $resource('dataAcrruals.json');
}])