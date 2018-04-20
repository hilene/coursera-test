(function () {
    'use strict';
    var app = angular.module('MsgApp', [])  
    app.controller('MsgController', MsgController); 
    MsgController.$inject = ['$scope'];
    function MsgController ($scope){
        $scope.name = "Louise";
        $scope.sayMessage = function (){
            return "I love to drink coffee with you!";
        }
    }

})();