angular.module('vmMusic').filter('toTrusted', [
    '$sce',
    function($sce){
        'use strict';

        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }
]);
