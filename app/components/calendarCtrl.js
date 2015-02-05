angular.module('vmMusic').controller('calendarCtrl', ['$scope', 'calendarData', function($scope, calendarData){
    'use strict';
	
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
	
}]);