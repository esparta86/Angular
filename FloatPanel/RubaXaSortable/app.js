var myapp = angular.module('sortableApp',['toggle-switch']);


myapp.controller('sortableController', function ($scope) {

  $scope.init = function(){
            $scope.model="On";
            $scope.dataQuestion=
            {
              questions: [
                    {
                        "id":"54930130-3d7a-42c1-890c-9eece792fd80",
                        "type": "date",
                        "questionText": "What is your employment date for current employment?",
                        "mandatory": true
                    },
                    {
                        "id":"54930130-3d7a-42c1-890c-9eece792fd81",
                        "type": "optionyesno",
                        "questionText": "Have you worked in Engineering department during your employment",
                        "mandatory": false
                    },
                    {
                        "id":"54930130-3d7a-42c1-890c-9eece792fd83",
                        "type": "header",
                        "questionText": "Department question",
                        "mandatory": ""
                    },
                    {
                        "id":"54930130-3d7a-42c1-890c-9eece792fd84",
                        "type": "notePanel",
                        "questionText": "Note panel",
                        "mandatory": ""
                    }
                ]
            };

            $scope.tilesQuestion=$scope.dataQuestion.questions;
      }





 Sortable.create(listWithHandle, {
  handle: '.my-handle',
  animation: 150
});

   $scope.deleteQuestion = function(id){
        console.log("id a eliminar : "+id);
        $scope.idD=id;
        var deleteObject=null;
        angular.forEach($scope.tilesQuestion,function(value,key){
            if(value.id ==$scope.idD)
                deleteObject=key;
        });
        $scope.tilesQuestion.splice(deleteObject,1); 
    
    }
 
  
  
});