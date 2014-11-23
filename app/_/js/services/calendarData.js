'use strict';

angular.module('vmMusic').factory('calendarData', function($http, $q, gCalUrl){	

	var calData = $q.defer()

	$http({method:'GET', url:gCalUrl}).success(function(result){
		calData.resolve(result.items);
	}).error(function(error){
		console.log('An error occured while getting calendar events. ' + error);
	});
	
	var upcomingEvents = calData.promise.then(
		function(data){
			return parseCalendarData(data, true);
		}	
	);
	var recentEvents = calData.promise.then(
		function(data){
			return parseCalendarData(data, false);
		}	
	);
	var nextEvent = calData.promise.then(
		function(data){
			var nextEventData;
			for(var i=0; i<data.length; i++){
				var thisEvent = getCalendarEventFromRawData(data[i]);
				var startTime = new Date(thisEvent.startTime);
				if(startTime > new Date()){
					if(nextEventData == undefined || startTime < new Date(nextEventData.startTime))
						nextEventData = thisEvent;
				}  
			}
			return nextEventData;
		}	
	);
	
	function parseCalendarData(data, boolFuture){
		var events = [];
		for(var i=0; i < data.length; i++){
			var thisEvent = getCalendarEventFromRawData(data[i]);
			var startTime = new Date(thisEvent.startTime);
			//if future events were requested process dates greater than now otherwise process dates in the past
			if((startTime > new Date() && boolFuture) || (startTime < new Date() && !boolFuture)) {				
				events.push(thisEvent);
			}
		}
		return events;
	}
	
	//creates a calendar event object from the retrieved raw json
	function getCalendarEventFromRawData(data){
		return {
			title: data.summary,
			startTime: data.start.dateTime,
			location: data.location,
			description: data.description
		};
	}

	return {
		getUpcomingEvents: function(){
			return upcomingEvents;
		},
		getRecentEvents: function(){
			return recentEvents;
		},
		getNextEvent: function(){
			return nextEvent;
		}
	};
});