describe('application configuration', function(){
    'use strict';

    beforeEach(module('vmMusic'));

    describe('routing', function(){
        it('should route correctly', inject(function($route){
            expect($route.routes['/'].controller).toBe('homeCtrl');
            expect($route.routes['/'].templateUrl).toBe('/components/home.html');

            expect($route.routes['/biography'].controller).toBe('bioCtrl');
            expect($route.routes['/biography'].templateUrl).toBe('/components/bio.html');

            expect($route.routes['/calendar'].controller).toBe('calendarCtrl');
            expect($route.routes['/calendar'].templateUrl).toBe('/components/calendar.html');

            expect($route.routes['/recordings'].controller).toBe('recordingsCtrl');
            expect($route.routes['/recordings'].templateUrl).toBe('/components/recordings.html');

            expect($route.routes['/photos'].controller).toBe('photosCtrl');
            expect($route.routes['/photos'].templateUrl).toBe('/components/photos.html');

            expect($route.routes['/videos'].controller).toBe('videosCtrl');
            expect($route.routes['/videos'].templateUrl).toBe('/components/videos.html');

            expect($route.routes['/contact'].controller).toBe('contactCtrl');
            expect($route.routes['/contact'].templateUrl).toBe('/components/contact.html');

            expect($route.routes[null].redirectTo).toBe('/');
        }));
    });

    describe('youTubeApi constant', function(){
        var youtubeApi;
        beforeEach(inject(function($injector){
            youtubeApi = $injector.get('youtubeApi');
        }));

        it('should contain searchTerm, recordCount and exclude list', function(){
            expect(youtubeApi.searchTerm).toBe('Vladimir Mollov');
            expect(youtubeApi.resultCount).toBeDefined();
            expect(youtubeApi.excludeList.length).toBeGreaterThan(0);
        });
        it('should compose a feed url', function(){
            expect(youtubeApi.getFeedUrl()).toContain('Vladimir+Mollov');
            expect(youtubeApi.getFeedUrl()).toContain('maxResults=' + (youtubeApi.resultCount + youtubeApi.excludeList.length));
        });
        it('should return false if isExcluded is gien an excluded item', function(){
            expect(youtubeApi.isExcluded(youtubeApi.excludeList[0])).toBeTruthy();
        });
    });

    /*describe('flickrApi constant', function(){
        var flickrApi;
        beforeEach(inject(function($injector){
            flickrApi = $injector.get('flickrApi');
        }));

        it('should return an album url', function(){
            expect(flickrApi.apiKey).toBeDefined();
            expect(flickrApi.getAlbumUrl()).toContain('api_key=' + flickrApi.apiKey);
        });
        it('should return an image sizes url', function(){
            expect(flickrApi.getImageSizesUrl('12345')).toContain('api_key=' + flickrApi.apiKey);
            expect(flickrApi.getImageSizesUrl('12345')).toContain('photo_id=12345');
        });
    });*/
});
