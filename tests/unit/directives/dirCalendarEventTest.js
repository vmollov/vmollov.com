describe('calendarEvent directory', function(){
    'use strict';

    var isoScope, element,
        geolocationServiceMock = {
            mapLocationInElement: function() { return undefined; },
            getDistance: function() { return undefined; }
        };

    beforeEach(module('vmMusic', 'templates'));

    beforeEach(inject(function($injector){
        var
            defer = $injector.get('$q').defer(),
            scope = $injector.get('$rootScope').$new(),
            compile = $injector.get('$compile'),
            event = {
                location: 'test location',
                title: 'test title',
                startTime: new Date(),
                description: 'test description'
            };

        defer.resolve({
            distance: '2 mi',
            duration: '9 min'
        });

        scope.event = event;
        element = '<calendar-event event=\'event\'></calendar-event>';

        element = compile(element)(scope);
        scope.$digest();
        isoScope = element.isolateScope();
    }));

    afterEach(function(){
        element.remove();
    });

    it('should contain an event object', function(){
        expect(isoScope.event).toBeDefined();
        expect(isoScope.event.title).toContain('title');
        expect(isoScope.event.location).toContain('location');
    });
});