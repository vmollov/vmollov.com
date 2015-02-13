describe('headerCtrl', function(){
    'use strict';

    var scope, headerCtrl, location;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        var controller = $injector.get('$controller');

        scope = $injector.get('$rootScope').$new();
        location = $injector.get('$location');

        headerCtrl = controller('headerCtrl', {$scope: scope, $location: location});
        scope.$digest();
    }));

    it('should display a feature event on the home page banner', function(){
        location.$$path = "/";
        expect(scope.displayFeatureEvent()).toBeTruthy();
        location.$$path = "/biography";
        expect(scope.displayFeatureEvent()).toBeFalsy();
    });
});