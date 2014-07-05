'use strict';

vmMusic.controller('calendarCtrl', function($scope, calendarData){
	
	calendarData.getUpcomingEvents().then(
		function(data){
			$scope.upcomingEvents = data;
			$scope.upcommingEventOrderPredicate = 'startTime';
		},
		function(status){
			console.log('error retrieving upcoming events: ' + status);
		}
	);

	calendarData.getRecentEvents().then(
		function(data){
			$scope.recentEvents = data;
			$scope.recentEventOrderPredicate = '-startTime';
		},
		function(status){
			console.log('error retrieving recent events: ' + status);
		}
	);
	
});