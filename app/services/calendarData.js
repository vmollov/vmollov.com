angular.module('vmMusic').factory('calendarData', ['$http', 'gCalUrl', function($http, gCalUrl){
    'use strict';

	var
        calData = $http({method:'GET', url:gCalUrl}).then(
            function(response){
                return response.data.items;
            },
            function(error){
                console.log('An error occurred while getting calendar events. ' + error);
            }
        ),
        //creates a calendar event object from the retrieved raw json
        getCalendarEventFromRawData = function(data){
            return {
                title: data.summary,
                startTime: data.start.dateTime,
                location: data.location,
                description: data.description
            };
        },
        parseCalendarData = function(data, boolFuture){
            var events = [], i, length, thisEvent, startTime;
            for(i = 0, length = data.length; i < length; i++){
                thisEvent = getCalendarEventFromRawData(data[i]);
                startTime = new Date(thisEvent.startTime);
                //if future events were requested process dates greater than now otherwise process dates in the past
                if((startTime > new Date() && boolFuture) || (startTime < new Date() && !boolFuture)) {
                    events.push(thisEvent);
                }
            }
            return events;
        },
        upcomingEvents = calData.then(
            function(data){
                return parseCalendarData(data, true);
            }
        ),
        recentEvents = calData.then(
            function(data){
                return parseCalendarData(data, false);
            }
        ),
        nextEvent = calData.then(
            function(data){
                var nextEventData, i, length, thisEvent, startTime;
                for(i = 0, length = data.length; i < length; i++){
                    thisEvent = getCalendarEventFromRawData(data[i]);
                    startTime = new Date(thisEvent.startTime);
                    if(startTime > new Date()){
                        if(nextEventData === undefined || startTime < new Date(nextEventData.startTime)){
                            nextEventData = thisEvent;
                        }
                    }
                }
                return nextEventData;
            }
        );

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
}]);