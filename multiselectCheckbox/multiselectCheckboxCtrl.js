var myapp = angular.module('App',['multi-select']);

myapp.controller('multiselectCtrl', function ($scope) {
   /*
    $scope.modernWebBrowsers = [
    { icon: "<img src='opera.png'/>",               name: "Opera",              maker: "(Opera Software)",        ticked: true  },
    { icon: "<img src='ie.png' />",   name: "Internet Explorer",  maker: "(Microsoft)",             ticked: false },
    { icon: "<img src='firefox.png' />",        name: "Firefox",            maker: "(Mozilla Foundation)",    ticked: true  },
    { icon: "<img src='safari.png'/>",      name: "Safari",             maker: "(Apple)",                 ticked: false },
    { icon: "<img src='chrome.png'/>",              name: "Chrome",             maker: "(Google)",                ticked: true  }
   ];
   */
   
   $scope.modernWebBrowsers = [
    {   name: "Opera",              maker: "(Opera Software)",        ticked: false  },
    {   name: "Internet Explorer",  maker: "(Microsoft)",             ticked: false },
    {   name: "Firefox",            maker: "(Mozilla Foundation)",    ticked: false  },
    {   name: "Safari",             maker: "(Apple)",                 ticked: false },
    {   name: "Chrome",             maker: "(Google)",                ticked: false  }
   ];

  $scope.showHelper=false; //disable helper container
  $scope.granDisabled = false;
 
  
  
});