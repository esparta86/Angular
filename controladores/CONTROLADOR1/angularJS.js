app = angular.module('myApp',[]);

app.controller('parentCtrl', ['$scope', function parentCtrl ($scope){

    $scope.$broadcast('parent', 'some data')
}]);


app.controller('SiblingOneCtrl', ['$scope', function SiblingOneCtrl($scope){
    $scope.$on('parent',function (event,data){
        console.log(data);
    });
}]);


app.controller('controlTest', ['$scope', function controlTest($scope){
    $scope.name="Lisandro";
    $scope.person={
        firstName:"Lisandro",
        lastName:"Rafaelano",
        fullName: function(){
            var x=$scope.person;
            return x.firstName+","+x.lastName;
        }
    };
}]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.controller('FirstCtrl', function ($scope,$rootScope) {
    $scope.person={
        name:"Lisandro",
        lastname:"Rafaelano",
        fullName: function(){
            var x=$scope.person;
            return x.name+","+x.lastname;
        },
        msg:""
    };
        $scope.handleClick = function() {

             $rootScope.$broadcast('UPDATE_CHILD',$scope.person);
        }
  });

app.controller('SecondCtrl', function ($scope,$rootScope) {
    $scope.nameCtrl2="";
    $scope.lastname2="";
    $scope.$on('UPDATE_CHILD', function(event,args) {
      // do something useful here;
      $scope.nameCtrl2=args.name;
    $scope.lastname2=args.lastname;
    });
  });