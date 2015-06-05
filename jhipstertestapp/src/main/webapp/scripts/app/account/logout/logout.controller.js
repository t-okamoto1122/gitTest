'use strict';

angular.module('jhipstertestappApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
