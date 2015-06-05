'use strict';

angular.module('jhipstertestappApp')
    .controller('MainController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            consol.log("ああああああ");
            $scope.isAuthenticated = Principal.isAuthenticated;
        });
    });
