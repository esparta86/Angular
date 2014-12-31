angular.module('confirmonexit',[])
   .service('confirmonexitService', ['$rootScope', function($rootScope){
     var sharedService = {};

    sharedService.message = 'i am here in confirmonexitService ......';
   
   }])

    .directive('confirmonexit',['$parse','$rootScope','confirmonexitService',
    function ($parse,$rootScope,confirmonexitService) {

     return {
          controller: function ($scope,confirmonexitService) {
                     $scope.validateDataUnsaved = function(referenceScope){
                          var args = {
                                      referenceRoot:$scope.$root,
                                      referenceScope: referenceScope
                                     };
                          referenceScope.$parent.$root.$broadcast("unsavedDataVerified",args);
                      return args.referenceRoot.sharedData.unsavedData;
                      }
                 },
           link: function($scope, elem, attrs) {
                 window.onbeforeunload = function(e){
                                  if ($scope.formE.$dirty||$scope.validateDataUnsaved($scope)){
                                      if(!$scope.$root.sharedData.data.stateSaveButton){
                                          $scope.$root.sharedData.data.stateSaveButton=false;
                                          //$scope.$root.warnUser("warnTemplate.html","args",$scope);
                                         

                                          return "Warning: You are currently editing a cell, Those edits will be lost if you leave this page. Are you sure you want to leave this page?";


                                        }
                                   }
                 }
             }
                 
        };
   
  }]);