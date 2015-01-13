angular.module('vmMusic').factory('googleMaps', ['$window', '$q', function($window, $q){
    'use strict';

    var deferred = $q.defer(),
        loadGoogleMapsScript = function () {
            var googleMapsScript = document.createElement('script'),
                scriptHolder = document.getElementsByTagName('script')[0];

            googleMapsScript.src = '//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize';
            googleMapsScript.type = 'text/javascript';
            googleMapsScript.async = 'true';

            scriptHolder.parentNode.insertBefore(googleMapsScript, scriptHolder);
        };

    $window.initialize = function () {
        deferred.resolve();
    };

    loadGoogleMapsScript();

    return deferred.promise;

}]);