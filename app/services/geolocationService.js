angular.module('vmMusic').factory('geolocationService', [
    '$window',
    '$q',
    function($window, $q){
        'use strict';
        //not tested

        var mapDeferred = $q.defer(),
            loadGoogleMapsScript = function () {
                var googleMapsScript = document.createElement('script'),
                    scriptHolder = document.getElementsByTagName('script')[0];

                googleMapsScript.src = '//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize&key=AIzaSyDRrUkiIxPAi_OtunVrHRhvikL7d83cQsI';
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
            }
        };
    }
]);
