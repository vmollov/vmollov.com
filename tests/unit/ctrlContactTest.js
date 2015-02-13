describe('contactCtrl', function(){
    'use strict';

    var scope, controller, contactCtrl, contactDataMock, $q;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){ //inject dependencies
        controller = $injector.get('$controller');
        $q = $injector.get('$q');
        scope = $injector.get('$rootScope').$new();

    }));

    beforeEach(function(){ //mock service
        contactDataMock = {
            getContactData: function(){
                var defer = $q.defer();
                defer.resolve({
                    "phone": "(412) 543-8522",
                    "email": "music@vmollov.com",
                    "copyright": "&copy; Vladimir Mollov 2013-2014"

                });
                return defer.promise;
            }
        };
    });

    beforeEach(function(){ //setup spies
        spyOn(contactDataMock, 'getContactData').and.callThrough();

        contactCtrl = controller('contactCtrl', {$scope: scope, contactData: contactDataMock});
        scope.$digest();
    });

    it('should contain contact data', function(){
        expect(scope.contact).toBeDefined();
        expect(scope.contact.email).toBe("music@vmollov.com");
        expect(scope.contact.phone).toBe('(412) 543-8522');
        expect(scope.contact.copyright).toContain('Vladimir Mollov');
    });
});