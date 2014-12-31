app = angular.module('DateMain',[]);

app.controller('dateCtrl', ['$scope', function WatchCtrl ($scope){
$scope.today = new Date("2014-09-30T00:00:00"); // get current date
$scope.todayUTC=$scope.today.toJSON();
var first = $scope.today.getDate() - $scope.today.getDay()-1; // First day is the day of the month - the day of the week
var last = first + 6; // last day is the first day + 6
$scope.start = new Date($scope.today.setDate(first)).toJSON();
$scope.end = new Date($scope.today.setDate(last)).toJSON();



   
}]);



