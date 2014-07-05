'use strict';

vmMusic.factory('calendarData', function($http, $q){	
	var calId = '5s80mf8pl7rtkj9bpasndqqe58@group.calendar.google.com';
	var gCalUrl = 'http://www.google.com/calendar/feeds/' + calId + '/public/full?alt=json&max-results=90&singleevents=false&sortorder=descending&orderby=starttime';
	
	var calData = $q.defer()
	$http({method:'GET', url:gCalUrl}).success(function(result){
		calData.resolve(result.feed.entry);
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
				var startTime = new Date(data[i].gd$when[0].startTime);
				if(startTime > new Date()){
					if(nextEventData == undefined || startTime < new Date(nextEventData.gd$when[0].startTime))
						nextEventData = data[i];
				}  
			}
			return nextEventData == undefined? undefined : getCalendarEventFromRawData(nextEventData);
		}	
	);
	
	function parseCalendarData(data, boolFuture){
		var events = [];
		for(var i=0; i < data.length; i++){
			var startTime = new Date(data[i].gd$when[0].startTime);
			//if future events were requested process dates greater than now otherwise process dates in the past
			if((startTime > new Date() && boolFuture) || (startTime < new Date() && !boolFuture)) {
				var thisEvent = getCalendarEventFromRawData(data[i]);				
				events.push(thisEvent);
			}
		}
		return events;
	}
	
	//creates a calendar event object from the retrieved raw json
	function getCalendarEventFromRawData(data){
		return {
			title: data.title.$t,
			startTime: data.gd$when[0].startTime,
			location: data.gd$where[0].valueString,
			description: data.content.$t
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