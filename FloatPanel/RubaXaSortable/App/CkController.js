﻿'use strict';
ckApp.controller('CkController',
    function CkController($scope) {
        $scope.body = '<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>';
        $scope.body2 ="test body 2"
        $scope.change = function () {
            $scope.body = '<h2>Changed</h2>';
            $scope.body = '<h1> test body 2</h1>';
        };
    }
);