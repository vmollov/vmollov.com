angular.module('vmMusic').directive('calendarEvent', [
	function(){
		'use strict';

		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/directives/calendarEvent.html',
			scope:{
				event: '='
			}
		};
	}
]);
