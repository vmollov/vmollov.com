describe('contactData service', function(){
    'use strict';

    var contactData, httpBackend;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        contactData = $injector.get('contactData');
        httpBackend = $injector.get('$httpBackend');

        httpBackend.whenGET('/data/about.json').respond(200,
            {
            "phone": "(412) 543-8522",
            "email": "music@vmollov.com",
            "copyright": "&copy; Vladimir Mollov 2013-2015"

            }
        );

    }));

    afterEach(function(){
        httpBackend.flush();
    });

    it('should return contact data', function(){
        contactData.getContactData().then(function(response){
            expect(response.phone.length).toBeGreaterThan(9);
            expect(response.email).toContain('vmollov.com');
        });
    });
});