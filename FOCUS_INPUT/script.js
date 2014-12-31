var myModule=angular.module('mymodule',[]);




myModule.factory('focus', function(timeout){
	 return function(id) {
      // timeout makes sure that is invoked after any other event has been triggered.
      // e.g. click events that need to run before the focus or
      // inputs elements that are in a disabled state but are enabled when those events
      // are triggered.
      $timeout(function() {
        var element = document.getElementById(id);
        if(element)
          element.focus();
      });
    };
});

myModule.directive('eventFocus', function(focus) {
    return function(scope, elem, attr) {
      elem.on(attr.eventFocus, function() {
        focus(attr.eventFocusId);
      });

      // Removes bound events in the element itself
      // when the scope is destroyed
      scope.$on('$destroy', function() {
        element.off(attr.eventFocus);
      });
    };
  });


myModule.controller('FocusController', function($scope,focus) {
    $scope.doSomething = function() {
      // do something awesome
      focus('email');
    };
 
});