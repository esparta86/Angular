var myModule=angular.module('mymodule',[]);

myModule.service('MathService', function(){
	 this.add = function(a, b) { return a + b };
     
    this.subtract = function(a, b) { return a - b };
     
    this.multiply = function(a, b) { return a * b };
     
    this.divide = function(a, b) { return a / b };
});

myModule.service('CalculatorService',function(MathService){
	this.square = function(a) { return MathService.multiply(a,a); };
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };
    var answer=0;
    this.setAnswer=function(r){answer=r ;};
    
    this.getAnswer=function(){return answer;};
});


myModule.controller('CalculatorController', function($scope,CalculatorService) {
    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
        CalculatorService.setAnswer($scope.answer);
    }
 
    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
        CalculatorService.setAnswer($scope.answer);
    }

});

myModule.controller('AnswerController', function($scope, CalculatorService){
    $scope.answerControl=0;
    $scope.doGetAnswer= function(){
        $scope.answerControl=CalculatorService.getAnswer();
    }
    

});

myModule.controller('ChildCtrl1', function($scope,CalculatorService) {
    $scope.answerChild1=0;
     $scope.doGetAnswer= function(){
        $scope.answerChild1=CalculatorService.getAnswer();
    }
    
});

myModule.controller('SubChildCtrl1', function($scope,CalculatorService) {
    $scope.answerSubChild1=0;
     $scope.doGetAnswer= function(){
        $scope.answerSubChild1=CalculatorService.getAnswer();
    }
    
});


myModule.controller('validatePasswordCtrl', function($scope) {
   
   $scope.init= function(){
	   $scope.password1 ="";
	   $scope.password2="";
	   $scope.message ="no match";
	   $scope.show=false;
   };
   
   $scope.$watch('password2+password1',function(newValue,oldValue){
	   if(newValue!=oldValue){
		   if($scope.password1.toString() != $scope.password2.toString()){
			   $scope.message= "no match";
			   $scope.show=true;
		   }else{
			   $scope.message= "great!! its match";
			   $scope.show=true;
		   }
	   }
   });
    
});

