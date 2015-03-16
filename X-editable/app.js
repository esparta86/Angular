var myapp = angular.module('xEditableApp',["xeditable"]);
myapp.run(function(editableOptions){
  editableOptions.theme = 'bs3';
});

myapp.controller('xEditableController', function ($scope,$filter) {
  $scope.init = function(){
    $scope.model="On";
            
  }

  $scope.user1 = {
    name: 'awesome user'
  };
   

  $scope.user = {
    status: 2
  }; 

  $scope.statuses = [
    {value: 1, text: 'status1'},
    {value: 2, text: 'status2'},
    {value: 3, text: 'status3'},
    {value: 4, text: 'status4'}
  ]; 


  $scope.showStatus = function() {
    var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
    return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
  };

 
});