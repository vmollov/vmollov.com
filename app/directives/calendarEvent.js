'use strict';

angular.module('vmMusic').directive('calendarEvent', ['geolocationService', function(geolocation){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/calendarEvent.html',
		scope:{
			event: '='
		},
		link: function(scope){
			geolocation.getDistance(scope.event.location).then(function(distance){
				scope.distance = distance;
				console.log(distance);
			});
		}
		
	};
}]);
