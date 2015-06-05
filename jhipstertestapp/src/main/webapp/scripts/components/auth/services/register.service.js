'use strict';

angular.module('jhipstertestappApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


