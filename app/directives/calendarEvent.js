'use strict';

angular.module('vmMusic').directive('calendarEvent', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/calendarEvent.html',
		scope:{
			event: '='
		}
		
	};
});
