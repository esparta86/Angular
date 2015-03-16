angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http','$q',function($http,$q) {
		return {
			get : function() {
				var deferred=$q.defer();
				$http.get('/api/todos').success(function(data){
					deferred.resolve(data);
				}).error(function(data){
					deferred.reject();
				});
				return deferred.promise;
			},
			create : function(todoData) {
				var deferred=$q.defer();
            	 $http.post('/api/todos', todoData).success(function(data){
                    deferred.resolve(data);
            	 }).error(function(){
            	 	deferred.reject();
            	 });
            	 return deferred.promise;

			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			},
			update: function(id){
				return $http.put('/api/todos/' + id);
			}
		}
	}]);
	/*.factory('MyInterceptor', ['$log','$http','Todos','$q', function($log,$http,Todos,$q){
        $log.debug("test for MyInterceptor");
       var responseInterceptor={
       	    response: function(response){
                   var deferred=$q.defer();
                   Todos.create().then(function(){

                   	deferred.resolve(response);
                   },function(){

                   	 deferred.resolve(response);

                   });
                   return deferred.promise;
       	    }
        
       };
       return responseInterceptor;
    }]).
    config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('MyInterceptor');
    }]);	*/ 

