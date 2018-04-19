    (function () {
    'use strict';
  var app = angular.module('DIApp', [])  
 app.controller('DIController', function ($scope, $filter){
     $scope.name = "Hilene";
     $scope.upper = function (){
         var upCase = $filter ('uppercase');
         $scope.name = upCase($scope.name);
     }
     
 });
 })();

                   
