describe('videosData service', function(){
    'use strict';

    var videosData, httpBackend, youtubeApi;

    beforeEach(module('vmMusic', 'mockYoutubeFeed'));

    beforeEach(inject(function($injector){
        var defaultJson = $injector.get('defaultJson');

        httpBackend = $injector.get('$httpBackend');
        youtubeApi = $injector.get('youtubeApi');

        httpBackend.expectGET(youtubeApi.getFeedUrl()).respond(200, defaultJson);

        videosData = $injector.get('videosData');
    }));

    afterEach(function(){
        httpBackend.flush();
    });

    it('should retrieve videos from youTube', function(){
        videosData.getYouTubeVideos().then(function(response){
            expect(response.length).toBeGreaterThan(5);
        });
    });
    it('should normalize the received data', function(){
        videosData.getYouTubeVideos().then(function(response){
            var normalized = videosData.sanitizeYouTubeVideos(response);
            expect(normalized.length).toBeGreaterThan(0);
            expect(normalized[0].embedUrl).toBeDefined();
            expect(normalized[0].title).toBeDefined();
            expect(normalized[0].thumbnail).toBeDefined();
            expect(normalized[0].description).toBeDefined();
        });
    });
});