describe('calendarCtrl', function(){
    'use strict';

    var calendarCtrl, scope, calendarDataMock, $q, $controller;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector) { //inject dependencies
        $controller = $injector.get('$controller');
        $q = $injector.get('$q');
        scope = $injector.get('$rootScope').$new();
    }));

    beforeEach(function() { //mock service
        var pastDate = new Date(),
            nextDate = new Date(),
            futureDate = new Date(),
            upcomingData, pastData;

        pastDate.setDate(pastDate.getDate() - 1);
        nextDate.setDate(nextDate.getDate() + 1);
        futureDate.setDate(futureDate.getDate() + 2);

        upcomingData = [
            {
                start: {dateTime: nextDate},
                location: 'test location',
                description: 'test description',
                summary: 'Test Event'
            },
            {
                start: {dateTime: futureDate},
                location: 'future location',
                description: 'future description',
                summary: 'Test Future Event'
            }
        ];
        pastData = [
            {
                start: {dateTime: pastDate},
                location: 'past location',
                description: 'past description',
                summary: 'Test Past Event'
            }
        ];
        calendarDataMock = {
            getUpcomingEvents: function () {
                var defer = $q.defer();
                defer.resolve(upcomingData);
                return defer.promise;
            },
            getRecentEvents: function () {
                var defer = $q.defer();
                defer.resolve(pastData);
                return defer.promise;
            }
        };
    });

    beforeEach(function(){ //setup spies
        spyOn(calendarDataMock, 'getUpcomingEvents').and.callThrough();
        spyOn(calendarDataMock, 'getRecentEvents').and.callThrough();

        calendarCtrl = $controller('calendarCtrl', {$scope: scope, calendarData: calendarDataMock});
        scope.$digest();
    });


    it('should call getUpcomingEvents and getRecentEvents on the calendarData service', function(){
        expect(calendarDataMock.getUpcomingEvents).toHaveBeenCalled();
        expect(calendarDataMock.getRecentEvents).toHaveBeenCalled();
    });

    it('should contain upcoming events and recent events', function(){
        expect(scope.upcomingEvents.length).toBe(2);
        expect(scope.recentEvents.length).toBe(1);
    });
});
