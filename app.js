(function(){ /*protects from bleeding thing into global scope*/ 
    'use strict'; 
    var app = angular.module('myApp',[]);

    app.controller('AppController',function($scope){
        $scope.name = '';
        $scope.totalNumericValue = 0;

        $scope.dispalyNumeric = function(){
            var totalNameValue = 0;
            $scope.totalNumericValue = totalNameValue;
        };
    });
})(); 