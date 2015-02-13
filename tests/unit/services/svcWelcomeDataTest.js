describe('welcomeData service', function(){
    'use strict';

    var welcomeData, httpBackend;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        httpBackend = $injector.get('$httpBackend');

        httpBackend.expectGET('data/welcome.json').respond({
            welcome: 'welcome message'
        });

        welcomeData = $injector.get('welcomeData');
    }));

    afterEach(function(){
        httpBackend.flush();
    });

    it('should contain welcome data', function(){
        welcomeData.getWelcomeMessage().then(function(response){
            expect(response.welcome).toBe('welcome message');
        });
    });
});