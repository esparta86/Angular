var todos = angular.module('todos', ['ui.bootstrap','app.directives','jsonService']);



todos.controller('TodoController', function($scope,$filter,JsonService) {
    var sortingOrder = 'name';
 /*  $scope.filteredTodos = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 3
  ,$scope.maxSize = 3
  ,$scope.sortingOrder = sortingOrder
  ,$scope.reverse = false;
  */

    JsonService.get(function(data){
    $scope.name = data.name;
    $scope.children = data.children;
    });

    $scope.sortingOrder = sortingOrder;
    $scope.reverse = false;
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 3;
    $scope.pagedItems = [];
    $scope.currentPage = 0;

    $scope.dataAccruals = { elements: 
     [
        {
            "selected"        : false,
            "accrualName"     :"Jan 01, 2014 to Mar 31,2014",
            "legalSection"    : "Litigation",
            "createdOn"       : "March 15, 2014",
            "byPerson"        : "Kathy Roberts",
            "matterName"      : "Acme Corporation",
            "matterType"      : "Personal Injury",
            "accruedAmount"   : "$36,728.01",
            "respondedPercent": "50%",
            "dueDate"         : "March 15,2014",
            "action"          : "view, edit , remove"
            

        },
        {
            "selected"        : false,
            "accrualName"     : "Jan 01, 2014 to Mar 31,2014",
            "legalSection"    : "Risk Managament",
            "createdOn"       : "March 15, 2014",
            "byPerson"        : "Kathy Roberts",
            "matterName"      : "Acme Corporation",
            "matterType"      : "Collections",
            "accruedAmount"   : "-$16,892.66",
            "respondedPercent": "33%",
            "dueDate"         : "March 15,2014",
            "action"          : "view, edit , remove"
            
        },
        {
            "selected"        : false,
            "accrualName"     : "Jan 01, 2014 to Mar 31,2014",
            "legalSection"    : "Litigation",
            "createdOn"       : "March 15, 2014",
            "byPerson"        : "Kathy Roberts",
            "matterName"      : "Acme Corporation",
            "matterType"      : "Labor",
            "accruedAmount"   : "-$26,892.66",
            "respondedPercent": "25%",
            "dueDate"         : "March 15,2014",
            "action"          : "view, edit , remove"
            
        },
        {
            "selected"        : false,
            "accrualName"     : "Jan 02, 2014 to April 01,2014",
            "legalSection"    : "Litigation",
            "createdOn"       : "March 16, 2014",
            "byPerson"        : "Kathy Roberts",
            "matterName"      : "Acme Corporation",
            "matterType"      : "Labor",
            "accruedAmount"   : "-$26,090.66",
            "respondedPercent": "25%",
            "dueDate"         : "March 16,2014",
            "action"          : "view, edit , remove"
            
        },
        {
            "selected"        : false,
            "accrualName"     : "Jan 03, 2014 to April 02,2014",
            "legalSection"    : "Risk Managament",
            "createdOn"       : "March 17, 2014",
            "byPerson"        : "Kathy Roberts",
            "matterName"      : "Acme Corporation",
            "matterType"      : "Labor",
            "accruedAmount"   : "-$29,090.66",
            "respondedPercent": "25%",
            "dueDate"         : "March 17,2014",
            "action"          : "view, edit , remove"
            
        },
         {
            "selected"        : false,
            "accrualName"     : "Jan 07, 2014 to April 07,2014",
            "legalSection"    : "Risk Managament 02",
            "createdOn"       : "March 22, 2014",
            "byPerson"        : "Karen Cornejo",
            "matterName"      : "Creativa consultores",
            "matterType"      : "Labor",
            "accruedAmount"   : "-$1200",
            "respondedPercent": "45%",
            "dueDate"         : "March 22,2014",
            "action"          : "view, edit , remove"
            
        },
        {
            "selected"        : false,
            "accrualName"     : "Jan 09, 2014 to April 09,2014",
            "legalSection"    : "Risk Managament 03",
            "createdOn"       : "May 01, 2014",
            "byPerson"        : "Patricia Renderos",
            "matterName"      : "Creativa consultores",
            "matterType"      : "Labor",
            "accruedAmount"   : "-$1200",
            "respondedPercent": "55%",
            "dueDate"         : "May 30,2014",
            "action"          : "view, edit , remove"
            
        },
        {
            "selected"        : false,
            "accrualName"     : "February 12, 2014 to April 12,2014",
            "legalSection"    : "Risk Managament 04",
            "createdOn"       : "May 11, 2014",
            "byPerson"        : "Karen Castillo",
            "matterName"      : "Creativa consultores",
            "matterType"      : "Labor",
            "accruedAmount"   : "$1200",
            "respondedPercent": "75%",
            "dueDate"         : "June 30,2014",
            "action"          : "view, edit , remove"
            
        },
         {  
            "selected"        : false,
            "accrualName"     : "February 13, 2014 to April 12,2014",
            "legalSection"    : "Risk Managament 05",
            "createdOn"       : "May 12, 2014",
            "byPerson"        : "Karen Castillo",
            "matterName"      : "Creativa consultores",
            "matterType"      : "Labor",
            "accruedAmount"   : "$1201",
            "respondedPercent": "76%",
            "dueDate"         : "July 01,2014",
            "action"          : "view, edit , remove"
            
        }

     ]

    };


   /* COLUMNAS A MOSTRAR DEL DATASET*/
   $scope.tabla={
        columnas:[
             {
                id:0,
                name:'Select',
                nameInternal:'selected',
                show :true,
                checkbox :true
             },
             {
                id:1,
                name:'Accrual Name',
                nameInternal:'accrualName',
                show: true
             },
             { 
                id:2,
                name:'Legal Section',
                nameInternal:'legalSection',
                show:true
             },
             {
                id:3,
                name:'Matter Type',
                nameInternal:'matterType',
                show:true

             },
             {
                id:4,
                name:'Accrued Amount',
                nameInternal:'accruedAmount',
                show:true
             },
             {
                id:5,
                name:'% Responded',
                nameInternal:'respondedPercent',
                show:true
             },
             {
                id:6,
                name:'Due Date',
                nameInternal:'dueDate',
                show:true
             },
             {
                id:7,
                name:'Action',
                nameInternal:'action',
                show:true
             }
  ]
   };

   var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };


  $scope.init = function () {
        $scope.filteredItems = $filter('filter')($scope.dataAccruals.elements, function (item) {
            for(var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();

        /*initialize the columms appear in dropdown custom */
        $scope.columnasDropDown=[];
        angular.forEach($scope.tabla.columnas, function(value, key) {
            this.push(value);
            },  $scope.columnasDropDown);
        };
 
   $scope.groupToPages = function () {
        $scope.pagedItems = [];
        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
      
    };
    
  $scope.numPages = function () {
    return Math.ceil($scope.todos.elements.length / $scope.numPerPage);
  };
  
 
  $scope.$watch('currentPage + itemsPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage);
    var end = begin + $scope.numPerPage;
    $scope.groupToPages();
  }); 

    /* function sort */
    $scope.sort_by = function(newSortingOrder) {
        if ($scope.sortingOrder == newSortingOrder)
            $scope.reverse = !$scope.reverse;

        $scope.sortingOrder = newSortingOrder;

        // icon setup
        $('th i').each(function(){
            // icon reset
            $(this).removeClass().addClass('icon-sort');
        });
        if ($scope.reverse)
            $('th.'+newSortingOrder+' i').removeClass().addClass('icon-chevron-up');
        else
            $('th.'+newSortingOrder+' i').removeClass().addClass('icon-chevron-down');
    };

    $scope.range = function (start, end) {
        var ret = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        return ret;
    };

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };

    $scope.member = {roles: []};
    $scope.selected_items = [];
    


});  // end controller


var app_directives = angular.module('app.directives', []);

app_directives.directive('dropdownMultiselect', function(){
   return {
       restrict: 'E',
       scope:{           
            model: '=',
            options: '=',
            pre_selected: '=preSelected'
       },
       template: "<div class='btn-group' data-ng-class='{open: open}'>"+
        "<button class='btn btn-small'>Columns</button>"+
                "<button class='btn btn-small dropdown-toggle' data-ng-click='open=!open;openDropdown()'><span class='caret'></span></button>"+
                "<ul class='dropdown-menu' aria-labelledby='dropdownMenu'>" + 
                    "<li><a data-ng-click='selectAll()'><i class='icon-ok-sign'></i>  Check All</a></li>" +
                    "<li><a data-ng-click='deselectAll();'><i class='icon-remove-sign'></i>  Uncheck All</a></li>" +                    
                   
                    "<li class='divider'></li>" +
                    "<li data-ng-repeat='option in options'> <a data-ng-click='setSelectedItem()'>{{option.name}}<span data-ng-class='isChecked(option.id)'></span></a></li>" +                                        
                     "<li class='divider'></li>" +
                     "<li><button ng-click='doApply()''> Apply </button></li>" +      

                "</ul>" +
            "</div>" ,
       controller: function($scope){
           
           $scope.openDropdown = function(){        
                    $scope.selected_items = [];
                    for(var i=0; i<$scope.pre_selected.length; i++){                      
                      $scope.selected_items.push($scope.pre_selected[i].id);
                    }                                        
            };
           
            $scope.selectAll = function () {
                $scope.model = _.pluck($scope.options, 'id');
                for (var i = 0; i < $scope.options.length; i++) {
                    $scope.options[i].show=false;
                };
                console.log($scope.model);
            };            
            $scope.deselectAll = function() {
                for (var i = 0; i < $scope.options.length; i++) {
                    $scope.options[i].show=true;
                };
                $scope.model=[];
                console.log($scope.model);
            };
            $scope.setSelectedItem = function(){
                var id = this.option.id;
                if (_.contains($scope.model, id)) {
                    $scope.model = _.without($scope.model, id);
                    this.option.show=true; //show again
                } else {
                    $scope.model.push(id);
                    this.option.show=false; //not show
                }
                console.log($scope.model);
                return false;
            };
            $scope.isChecked = function (id) {                 
                if (_.contains($scope.model, id)) {
                    return 'icon-ok pull-right';
                }
                return false;
            };                                 
       }
   } 
});