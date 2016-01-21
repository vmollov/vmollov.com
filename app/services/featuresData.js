angular.module('vmMusic').factory('featureData', [
    '$http',
    function($http){
        'use strict';

        var deferred = $http({method: 'GET', url: '/data/features.json'}).then(
            function(response){
               return response.data;
            }
        );

        return {
            getFeatures: function(){
                return deferred;
            }
        };
    }
]);