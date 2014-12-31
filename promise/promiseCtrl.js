app = angular.module('promiseMain',[]);

app.controller('promiseCtrl', ['$scope','$q', function WatchCtrl ($scope,$q){

 $scope.fail=false;
 $scope.fail2=false;
 $scope.test=function(){

  var deferred=$q.defer();

  var promise = deferred.promise;

  promise.then(function(result){
      alert('Success '+result);
  },function(reason){
      alert('Error '+reason);
  });


  if ($scope.fail) {
    deferred.reject('sorry');
  }
  else
    deferred.resolve('cool');

 };


$scope.test2 = function(){
   var deferred= $q.defer();
   var deferred2= $q.defer();
   var deferred3= $q.defer();
   

   var promise=deferred.promise;
   var promise2=deferred2.promise;
   var promise3=deferred3.promise;

   setTimeout(function(){
     deferred.resolve('some value');
     
   },6000);
   setTimeout(function(){
     deferred2.reject('some value 2');
     
   },2000);


    setTimeout(function(){
     deferred3.resolve('some value 3');
     
   },5000);


  /* promise.then(function(result){
    $scope.status2=' success pass 1 - '+result;
    return result+ ' hussa! ';
   },function(reason){
       $scope.status2=' failure pass 1';
       return reason;
   })
   .then(function(result){
     alert('Success: '+result);
   }, function(reason){
      alert('Error: '+reason);
   });*/

   $q.all([promise2,promise3,promise])
   .then(function(result){
      alert('Success: '+result);
   },function(result){
      alert('Error : '+result);
   });

/*
   if($scope.fail2)
    deferred.reject('Bad Luck');
   else
    deferred.resolve('Hurray ');
*/

};

	/*$scope.fail=false;

	$scope.test= function(){
		var deferred=$q.defer();

		var promise= deferred.promise;

		promise.then(function(result){
			alert('Success'+result);
		}, function(reason){
				alert('Error'+reason);
		});

		if($scope.fail)
			deferred.reject('sorry');
		else
			deferred.resolve('cool');
	

	};*/

	// for the purpose of this example let's assume that variables `$q`, `scope` and `okToGreet`
  // are available in the current lexical scope (they could have been injected or passed in).

 /* function okToGreet(name){
     if (undefined != name)
     {
     	return true;
     }else
     return false;
  }

  function asyncGreet(name) {
    var deferred = $q.defer();

    setTimeout(function() {
      // since this fn executes async in a future turn of the event loop, we need to wrap
      // our code into an $apply call so that the model changes are properly observed.
      $scope.$apply(function() {
        deferred.notify('About to greet ' + name + '.');

        if (okToGreet(name)) {
          deferred.resolve('Hello, ' + name + '!');
        } else {
          deferred.reject('Greeting ' + name + ' is not allowed.');
        }
      });
    }, 1000);

    return deferred.promise;
  }

  var promise = asyncGreet('Robin Hood');
  promise.then(function(greeting) {
    alert('Success: ' + greeting);
  }, function(reason) {
    alert('Failed: ' + reason);
  }, function(update) {
    alert('Got notification: ' + update);
  });

var deferred2 = $q.defer();
var promise2=deferred2.promise;

*/

   
}]);



