describe('calendarData service', function(){
    'use strict';

    var calendarData, gCalUrl, httpBackend;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        calendarData = $injector.get('calendarData');
        gCalUrl = $injector.get('gCalUrl');
        httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(function(){
        var pastDate = new Date(),
            nextDate = new Date(),
            futureDate = new Date();

        pastDate.setDate(pastDate.getDate() - 1);
        nextDate.setDate(nextDate.getDate() + 1);
        futureDate.setDate(futureDate.getDate() + 2);

        httpBackend.when('GET', gCalUrl).respond(200, {
            items:[
                {
                    start: {dateTime: pastDate},
                    location: 'past location',
                    description: 'past description',
                    summary: 'Test Past Event'
                },
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
            ]
        });
    });

    afterEach(function(){
        httpBackend.flush();
    });

    it('should return upcoming events', function(){
        calendarData.getUpcomingEvents().then(function(response){
            expect(response.length).toBe(2);
            expect(response[1].title).toBe('Test Future Event');
            expect(response[1].description).toBe('future description');
            expect(response[1].startTime).toBeGreaterThan(new Date());
        });
    });

    it('should return recent events', function(){
        calendarData.getRecentEvents().then(function(response){
            expect(response.length).toBe(1);
            expect(response[0].title).toBe('Test Past Event');
            expect(response[0].description).toBe('past description');
            expect(response[0].startTime).toBeLessThan(new Date());
        });
    });

    it('should return next events', function(){
        calendarData.getNextEvent().then(function(response){
            expect(response.title).toBe('Test Event');
            expect(response.description).toBe('test description');
            expect(response.startTime).toBeGreaterThan(new Date());
        });
    });
});