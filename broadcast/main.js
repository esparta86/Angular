var myModule=angular.module('mymodule',[]);



myModule.controller('FirstCtrl', function($scope) {
      $scope.handleClick = function(msg) {
                   $scope.$broadcast('UPDATE_CHILD',msg);
                   };
  });

myModule.controller('SecondCtrl', function($scope) {
    $scope.$on('UPDATE_CHILD', function(event,msg) {
      console.log("this child was updated with following message : "+msg);

    });
});



myModule.controller('FirstCtrlNorelationShip', function($rootScope,$scope) {
	 $scope.person = {
        firstName: "John",
        lastName: "Doe"
        };
      $rootScope.handleClick = function(msg,name,last) {
			      	 var DATA = {
			                    'Name': name,
			                    'LastName':last,
			                    'msg': msg,
			                     };
                   $rootScope.$broadcast('UPDATE_ALL',DATA);
                   };
  });

myModule.controller('SecondCtrlNorelationShip', function($scope) {
    $scope.$on('UPDATE_ALL', function(event,DATA) {
    $scope.information="este CONTROLADOR2 se actualizo a  : "+DATA.Name+", "+DATA.LastName+" ||mensaje:"+DATA.msg;


    });
});



myModule.controller('thirdcontroller', function($scope) {
    $scope.$on('UPDATE_ALL', function(event,DATA) {
    $scope.information="este CONTROLADOR2 se actualizo a  : "+DATA.Name+", "+DATA.LastName+" ||mensaje:"+DATA.msg;


    });
});