'use strict';

vmMusic.directive('calendarEvent', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/calendarEvent.html',
		scope:{
			event: '='
		}
		
	};
});
