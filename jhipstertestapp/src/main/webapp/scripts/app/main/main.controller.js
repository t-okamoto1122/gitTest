'use strict';

angular.module('jhipstertestappApp')
    .controller('MainController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            consol.log("ああああああコミット後編集後→コミット＆プッシュ→編集＆コミット"
            		+"んで、もっかい編集してコミット");
            $scope.isAuthenticated = Principal.isAuthenticated;
        });
    });
