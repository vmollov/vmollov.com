angular.module('vmMusic').directive('mapLocation', ['geolocationService', function (geolocation) {
    'use strict';
    
    return {
        restrict: 'A',
        replace: false,
        scope: {
           mapLocation: '@'
        },
        link: function(scope, elem){
            geolocation.mapLocationInElement(scope.mapLocation, elem[0]);
        }
   };
}]);