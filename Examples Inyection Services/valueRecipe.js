var myApp = angular.module('myApp', []);
myApp.value('clientId', 'a12345654321x');

myApp.controller('DemoController', ['clientId','$scope', function DemoController(clientId,$scope) {
this.clientId = clientId;
}]);





myApp.factory('clientId', function clientIdFactory() {
return 'a12345654321x';
});

myApp.factory('apiToken', ['clientId', function apiTokenFactory(clientId) {
var encrypt = function(data1, data2) {
  // NSA-proof encryption algorithm:
  return (data1 + ':' + data2).toUpperCase();
};

var secret = "LISANDRO";
var apiToken = encrypt(clientId, secret);

return apiToken;
}]);

myApp.controller('DemoControllerFactory', ['$scope','apiToken', function DemoController($scope,apiToken) {
this.apiToken = apiToken;
}]);