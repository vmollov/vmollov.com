angular.module('vmMusic').directive('mapLocation', ['googleMaps', function (googleMaps) {
    'use strict';
    
    return {
        restrict: 'A',
        replace: false,
        scope: {
           mapLocation: '@'
        },
        link: function(scope, elem){
            googleMaps.then(function(){
                var
                    geocoder = new google.maps.Geocoder(),
                    mapOptions = {
                        zoom: 12,
                        mapMaker: true,
                        mapTypeControl: false,
                        overviewMapControl: false,
                        streetViewControl: false,
                        zoomControl: false
                    };

                geocoder.geocode( { 'address': scope.mapLocation}, function(results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        var map = new google.maps.Map(elem[0], mapOptions),
                            marker = new google.maps.Marker({
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
}]);