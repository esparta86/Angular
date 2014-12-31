angular.module('docsSimpleDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  .directive('myCustomer', function() {
    return {
      restrict: 'EA',
      
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  })
  .directive('myDomDirective', function() {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
  })

  .directive('myCustomerWithTemplate', function() {
    return {
      templateUrl: 'my-customerw.html'
    };


  });;