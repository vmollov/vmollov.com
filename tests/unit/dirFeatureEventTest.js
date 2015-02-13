describe('featureEvent directive', function(){
    'use strict';

    var isoScope, element,
        calendarDataMock = {
            getNextEvent: function(){ return undefined; }
        };

    beforeEach(module('vmMusic', 'templates', function($provide){
        $provide.value('calendarData', calendarDataMock);
    }));

    beforeEach(inject(function($injector){
        var scope = $injector.get('$rootScope').$new(),
            compile = $injector.get('$compile'),
            deferred = $injector.get('$q').defer(),
            display = true,
            nextDate = new Date();

        spyOn(calendarDataMock, 'getNextEvent').and.returnValue(deferred.promise);

        nextDate.setDate(nextDate.getDate() + 1);
        deferred.resolve({
            start: {dateTime: nextDate},
            location: 'test location',
            description: 'test description',
            summary: 'Test Event'
        });

        scope.display = display;
        element = compile('<feature-event display="display"></feature-event>')(scope);
        scope.$apply();
        isoScope = element.isolateScope();
    }));

    it('should retrieve the next event', function(){
        expect(calendarDataMock.getNextEvent).toHaveBeenCalled();
        expect(typeof isoScope.event).toBe('object');
    });
});