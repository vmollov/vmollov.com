angular.module('vmMusic').factory('calendarData', ['$http', '$q', 'gCalUrl', function($http, $q, gCalUrl){
    'use strict';

	var
        calData = $q.defer(),
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
        upcomingEvents = calData.promise.then(
            function(data){
                return parseCalendarData(data, true);
            }
        ),
        recentEvents = calData.promise.then(
            function(data){
                return parseCalendarData(data, false);
            }
        ),
        nextEvent = calData.promise.then(
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

    $http({method:'GET', url:gCalUrl})
        .success(function(result){
            calData.resolve(result.items);
        })
        .error(function(error){
            console.log('An error occurred while getting calendar events. ' + error);
        });

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