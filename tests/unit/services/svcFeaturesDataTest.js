describe('featureData service', function () {
    'use strict';

    var featureData, httpBackend;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        featureData = $injector.get('featureData');
        httpBackend = $injector.get('$httpBackend');

        httpBackend.whenGET('/data/features.json').respond(200,
            {
                "video": [
                    {
                        "order": 1,
                        "src": "http://testVideo.mp4",
                        "img": "http://testImg.jpg",
                        "title": "Vladimir Mollov - Video"
                    }
                ],
                "audio": [
                    {
                        "order": 1,
                        "src": "testAudio.mp3",
                        "title": "Test",
                        "description": "Test Description"
                    }
                ]
            }
        );
    }));

    afterEach(function(){
        httpBackend.flush();
    });

    it('should return an array of video features', function(){
        featureData.getFeatures().then(function(response){
            expect(response.video.length).toBe(1);
            expect(response.video[0].src).toContain('testVideo');
        });
    });
    it('should return an array of audio features', function(){
        featureData.getFeatures().then(function(response){
            expect(response.audio.length).toBe(1);
            expect(response.audio[0].src).toContain('testAudio');
        });
    });
});