/*(function () {
    'use strict';
    var app = angular.module('DIApp', [])  
    app.controller('DIController', DIController); 
    Protect the functionnality of the code before to minify the code 
    DIController.$inject = ['$scope', '$filter', '$injector'];
    function DIController ($scope, 
                           $filter, 
                           $injector){
        $scope.name = "Charles";
        $scope.upper = function (){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        console.log($injector.annotate(DIController));
    };
    
    function AnnotateMe (name, job, blah) {
        return "Blah!";
    }
    console.log(AnnotateMe.toString());
    console.log(DIController.toString());
    
})();*/

!function(){"use strict";function n(o,e,t){o.name="Charles",o.upper=function(){var n=e("uppercase");o.name=n(o.name)},console.log(t.annotate(n))}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter","$injector"],console.log(function(n,o,e){return"Blah!"}.toString()),console.log(n.toString())}();