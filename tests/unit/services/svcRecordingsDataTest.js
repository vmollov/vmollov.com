describe('recordingsData service', function(){
    'use strict';

    var recordingsData, httpBackend;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        httpBackend = $injector.get('$httpBackend');
        httpBackend.whenGET('/data/recordings.json').respond([
            {
                "order": 3,
                "img": "test.jpg",
                "title": "Test Recording",
                "description": "Test Description",
                "samples":[
                    {
                        "order": 1,
                        "src": "test_1",
                        "title": "test 1"
                    },
                    {
                        "order": 2,
                        "src": "test_2",
                        "title": "test 2"
                    }
                ]
            }
        ]);

        recordingsData = $injector.get('recordingsData');
    }));

    afterEach(function(){
        httpBackend.flush();
    });

    it('should retrieve the recordings data from the backend', function(){
        recordingsData.getAllRecordings().then(function(response){
            expect(response.length).toBeGreaterThan(0);
        });
    });
    it('should have the correct data', function(){
        recordingsData.getAllRecordings().then(function(response){
            expect(response[0].order).toBeDefined();
            expect(response[0].img).toBeDefined();
            expect(response[0].title).toBeDefined();
            expect(response[0].description).toBeDefined();
            expect(response[0].samples).toBeDefined();
        });
    });
    it('should have some samples', function(){
        recordingsData.getAllRecordings().then(function(response){
            expect(response[0].samples.length).toBeGreaterThan(0);
        });
    });
});