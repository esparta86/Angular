angular.module('todoController', [])

    // inject the Todo service factory into our controller
    .controller('mainController', ['$scope','$http','Todos','dialogService','$log',
     function($scope, $http, Todos,dialogService,$log) {
        $scope.formData = {
            text:"",
            startDate:"",
            endDate:"",
            priority:0

        };
        $scope.loading = true;

        $scope.idSelectedVote=null;

        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
                $scope.loading = false;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {
             
             $scope.formData.startDate=angular.element('#datetimepicker1').data('date');
             $scope.formData.endDate=angular.element('#datetimepicker2').data('date');
             
             $scope.formData.startDate=new Date($scope.formData.startDate.toString()).toISOString();
             $scope.formData.endDate=new Date($scope.formData.endDate.toString()).toISOString();
             
            // $scope.formData.startDate=new Date('2014-01-22T14:56:59.301Z');
            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if ($scope.formData.text != undefined && $scope.formData.priority != undefined) {
                $scope.loading = true;

                // call the create function from our service (returns a promise object)
                Todos.create($scope.formData)

                    // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.todos = data; // assign our new list of todos
                    });
            }
        };

        $scope.confirmClick = function(){
            $scope.deleteTodo();
            dialogService.cancel("myDialog");
        }

        $scope.cancelClick= function(){
            dialogService.cancel("myDialog");
        }


        $scope.loadWarn = function(id){
          $scope.id=id;
          doDialog("templateForDelete.html");
        }

        // DELETE ==================================================================
        // delete a todo after checking it
        $scope.deleteTodo = function() {
     

                $scope.loading = true;

            Todos.delete($scope.id)
                // if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.loading = false;
                    $scope.todos = data; // assign our new list of todos
                });
        };

        
        function doDialog(template) {

            // The data for the dialog
            var model = {
                firstName: "Jason",
                lastName: "Stadler"
            };

            // jQuery UI dialog options
            var options = {
                autoOpen: false,
                modal: true,
                close: function(event, ui) {
                    $log.debug("Predefined close");
                }
            };

            // Open the dialog using template from script
            dialogService.open("myDialog", template, model, options,$scope).then(
                function(result) {
                    $log.debug("Close");
                    $log.debug(result);
                },
                function(error) {
                    $log.debug("Cancelled");
                }
            );

        }


        $scope.setSelected = function(idSelectedVote){
            $scope.idSelectedVote=idSelectedVote;
            $scope.retrieveRecord=null;
            /*retrive data */
            angular.forEach($scope.todos,function(value,key){
                    if(value._id==$scope.idSelectedVote){
                        $scope.retrieveRecord=$scope.todos[key];
                    }
            });

            //$scope.formData.text=$scope.retrieveRecord.text;
            _copyObject($scope.retrieveRecord,$scope.formData);

            /*FOMATING DATA FOR DATE*/
            angular.forEach($scope.formData,function(value,key){
                if(key=="startDate")
                    $scope.formData.startDate=new Date(value).toString('MM/dd/yyyy hh:mm:ss');
                if(key=="endDate")
                    $scope.formData.endDate =new Date(value).toString('MM/dd/yyyy hh:mm:ss');
            });


            /*set data in form*/

        };


        function _copyObject(srcObject,destObject){
            for(var key in destObject){
                 if(destObject.hasOwnProperty(key)&& srcObject.hasOwnProperty(key)){
                    destObject[key]=srcObject[key];
                }
            }

        }


    }]);