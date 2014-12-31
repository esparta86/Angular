angular.module('main', ['ngAnimate', 'toaster'])

.controller('myController', function($scope, toaster) {

    $scope.popupData={
       information:{
      title:"some tittle for BCL EVENT",
      period:"date 1 to date 2",
      footer:"footer data"
   },
   typePopup:1
};

var intType=$scope.popupData.typePopup;
var information=$scope.popupData.information;
var log=[];
angular.forEach(information,function(value,key){
  this.push(key + ': ' + value);
  console.log("key :"+key+"| value :"+value);
},log);
	
    $scope.pop = function(){

        typeTemplate=$scope.popupData.typePopup;
    	$scope.templateSelected='';
         switch(typeTemplate){
         	case 1:
             $scope.templateSelected="<div style='background-color: #ffffff; color:#000000'>template 1 PARA BCL EVENT</h2></div>"+
            " <div>Title : "+information.title+"<br> period: "+information.period+"</div>";
         	break;

         	case 2:
         	  $scope.templateSelected="<b>Honda Uno de los puntos fuertes de Honda y su principal factor de diferenciación respecto a otras empresas automovilísticas es la investigación y desarrollo de tecnologías que permitan alcanzar la llamada movilidad sostenible, <br>estrategia que comenzó hace ya más de 30 años. Hoy en día, la compañía está centrada en impulsar los vehículos híbridos, <br>ya que considera que esta tecnología es actualmente la más eficaz para reducir las emisiones contaminantes y una de las pocas ya disponibles y accesibles de forma masiva en el mercado.";
         	break;

         	case 3:
         	  $scope.templateSelected="TEMPLATE PARA BCL TASK";
         	 break;
         }
        /*toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');*/
        /*toaster.pop('error', "title", '<ul><li>Render html</li></ul>', null, 'trustedHtml');*/
        /*toaster.pop('warning', "title", null, null, 'template');*/
        toaster.pop('note', "title", $scope.templateSelected, null, 'trustedHtml');
        /*toaster.pop('note', "title", "text");*/
    };
    
    $scope.clear = function(){
        toaster.clear();
    };






    
});