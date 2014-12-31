var moduleParent=angular.module('moduleParent',[]);

moduleParent.factory('Data', function () {
var dataTask={
		startDate :'',
		endDate   :'',
		selectedOption: '',
		data: []
     };

 return { 
 	setStartDate:function(st){
 		dataTask.startDate=st;
 	},
 	getStartDate: function(){
 		return dataTask.startDate;
 	},
 	setEndDate:function(ed){
 		dataTask.endDate=ed;
 	},
 	getEndDate: function(){
 		return dataTask.endDate;
 	},
 	setSelectedOption:function(option){
 		dataTask.selectedOption=option;
 	},
 	getSelectedOption: function(){
 		return dataTask.selectedOption;

 	}



     };

});

moduleParent.controller('FirstCtrl', ['$scope','Data' ,function($scope,Data){
	 $scope.Data = Data;

}]);


moduleParent.controller('SecondCtrl', ['$scope','Data', function($scope,Data){
	 $scope.Data = Data;

}]);



