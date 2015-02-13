describe('mapLocation directive', function(){
    'use strict';

    var element, geolocationService;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        var scope = $injector.get('$rootScope').$new(),
            compile = $injector.get('$compile');

        geolocationService = $injector.get('geolocationService');

        spyOn(geolocationService, 'mapLocationInElement').and.return;

        element = '<div map-location="132 Sumner Ave, Pittsburgh, PA"></div>';

        element = compile(element)(scope);
        scope.$digest();

    }));

    it('should call geolocationService mapLocationInElement', function(){
        expect(geolocationService.mapLocationInElement).toHaveBeenCalledWith('132 Sumner Ave, Pittsburgh, PA', element[0]);
    });
});