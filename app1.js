(function() {
    'use strict';
    var app = angular.module('DIApp', ['ngRoute']);  
    app.controller('DIController', DIController);
    function DIController ($scope, $filter, $injector){
        $scope.name = "Charlotte";
        $scope.upper = function (){
            var upCase = $filter ('uppercase');
            $scope.name = upCase($scope.name);
        }
        console.log($injector.annotate(DIController));
                   
    function AnnotateMe(name, job, blah) {
        return "blah"
    }
    /*  console.log(AnnotateMe());
    console.log(AnnotateMe);
    console.log(AnnotateMe.toString());*/
  /*  console.log(DIController.toString());*/
}});


