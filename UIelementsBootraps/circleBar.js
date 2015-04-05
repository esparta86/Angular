/**
*  Module
*
* Description
*/
var module = angular.module('circleModule', ['ng']);
module.controller('circleController', ['$scope','$rootScope','$log', function($scope,$rootScope,$log){

	$scope.initCircle = function(){
      $log.debug("****************  initializing circleController ************************");
      $scope.dataCircle = [{
      	"id":"1",
      	"value":"20",
      	"legend":"Chrome",
      	"textCenter":"percent"
      },
      {
      	"id":"2",
      	"value":"10",
      	"legend":"Firefox",
      	"textCenter":"percent"
      },
      {
      	"id":"3",
      	"value":"15",
      	"legend":"Opera",
      	"textCenter":"percent"
      },
      {
      	"id":"4",
      	"value":"5",
      	"legend":"Internet Explorer",
      	"textCenter":"percent"
      }];

      $scope.datamodel=$scope.dataCircle;
      $scope.datatest="this is a test ";
	};





	
}]);

module.directive('circleBar', ['$sce', function($sce){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {
		 	datamodel : '=',
		 	datatest  : '='
		 }, 
		controller: function($scope, $element, $attrs, $transclude) {
          $scope.dataTest2="test 2";
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		 template: '<div name="containerCircleBar">'+
                     '<ul id="listWithHandle" class="row">'+
                       '<li ng-repeat="tileCircle in datamodel" class="col-xs-2 col-sm-2 col-md-2 col-lg-2">'+
                         '<div id="{{tileCircle.id}}">'+
                           '<div class="circleStatsItemBox">'+
                             '<div class="header"><span ng-bind="tileCircle.legend"></span></div>'+
                             '<span class="percent" ng-bind="tileCircle.textCenter"></span>'+
                             '<div class="circleStat">'+
                               '<div style="width: 120px;display: inline; padding-left: 2.5em">'+
                                   '<input type="text" value="{{tileCircle.value}}" class="whiteCircle" data-min="0" data-max="100">'+
                                   
                               
                               '</div>'+
                             '</div>'+
                           '</div>'+
                         '</div>'+
                       '</li>'+
                     '</ul>'+
                   '</div>',
		// templateUrl: '',
		 replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
		  /*$scope.dataTest2="link 2";	*/


		}
	};
}]);