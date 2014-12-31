function ControladorTareas($scope){
   $scope.tareas=[{texto:'Ser superheroico con AngularJS',hecho:true},
                  {texto:'Crear un ap con Angular',hecho:false},
                   {texto:'Finalizar todas las tareas de AngularJS',hecho:false}];

  $scope.agregarTarea=function(){
  	$scope.tareas.push({texto:$scope.textoNuevaTarea,hecho:false});
  	$scope.textoNuevaTarea='';
  };

  $scope.restantes=function(){
  	var cuenta=0;
  	angular.forEach($scope.tareas,function(tarea){
      cuenta+=tarea.hecho?0:1;
  	});
  	return cuenta;
  };

  $scope.eliminar=function(){
  	var tareasViejas=$scope.tareas;
  	$scope.tareas=[];
  	angular.forEach(tareasViejas,function(tarea){
  		if(!tarea.hecho) $scope.tareas.push(tarea);
  		});
  	  };
}