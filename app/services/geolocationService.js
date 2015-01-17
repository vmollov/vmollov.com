angular.module('vmMusic').factory('geolocationService', ['$window', '$q', function($window, $q){
    'use strict';

    var mapDeferred = $q.defer(),
        loadGoogleMapsScript = function () {
            var googleMapsScript = document.createElement('script'),
                scriptHolder = document.getElementsByTagName('script')[0];

            googleMapsScript.src = '//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize';
            googleMapsScript.type = 'text/javascript';
            googleMapsScript.async = 'true';

            scriptHolder.parentNode.insertBefore(googleMapsScript, scriptHolder);
        },
        detectedLocation = null,
        detectLocation = function(){
            var deferred = $q.defer();
            if(!detectedLocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    detectedLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    deferred.resolve(detectedLocation);
                });
            } else {
                deferred.resolve(detectedLocation);
            }

            return deferred.promise;
        },
        distanceServiceDeferred = $q.defer();

    $window.initialize = function () {
        mapDeferred.resolve();
        distanceServiceDeferred.resolve(new google.maps.DistanceMatrixService());
    };

    loadGoogleMapsScript();

    return {
        getMap: function(){
            return mapDeferred.promise;
        },
        mapLocationInElement: function(location, element){
            mapDeferred.promise.then(function(){
                var geocoder = new google.maps.Geocoder(),
                    mapOptions = {
                        zoom: 12,
                        mapMaker: true,
                        mapTypeControl: false,
                        overviewMapControl: false,
                        streetViewControl: false,
                        zoomControl: false
                    };

                geocoder.geocode( { 'address': location}, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        var map = new google.maps.Map(element, mapOptions),
                            marker = new google.maps.Marker(
                                {
                                    map: map,
                                    clickable: true,
                                    flat: true,
                                    position: results[0].geometry.location,
                                    visible:true
                                }
                            );
                        map.setCenter(results[0].geometry.location);
                    } else {
                        console.log('Geocode was not successful for the following reason: ' + status);
                    }
                });
            });
        },
        getDistance: function(toLocation){
            var deferred = $q.defer(),
                //depending on the detected location from the browser and the distance service which comes with google maps api
                dependencies = $q.all([detectLocation(), distanceServiceDeferred.promise]);

            dependencies.then(function(values){
                var fromLocation = values[0], //detected location
                    distanceService = values[1]; //google Maps distance service

                distanceService.getDistanceMatrix({
                        origins: [fromLocation],
                        destinations: [toLocation],
                        travelMode: google.maps.TravelMode.DRIVING,
                        unitSystem: google.maps.UnitSystem.IMPERIAL,
                        durationInTraffic: true,
                        avoidHighways: false,
                        avoidTolls: false
                    }, function(distanceObject){
                        deferred.resolve(distanceObject.rows[0].elements[0].distance.text);
                    }
                );
            });

            return deferred.promise;
        }
    };
}]);