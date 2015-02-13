describe('photosData service', function(){
    'use strict';

    var photosData, httpBackend,
        photoset = {
            photo: (function(){
                var result = [], i,
                    startId = 14453317200,
                    startDateupload = 1405219854;

                for(i = 0; i < 10; i++){
                    result.push({
                        "id":(startId + i).toString(),
                        "title":"test title " + i,
                        "dateupload":(startDateupload + i).toString()
                    });
                }

                return result;
            }())
        },
        sizes = {
            size: [
                {
                    label: 'Square',
                    source: 'squareImg.jpg'
                },
                {
                    label: 'Medium',
                    source: 'mediumImg.jpg'
                },
                {
                    label: 'Original',
                    source: 'originalImg.jpg'
                }
            ]
        };

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        var flickrApi = $injector.get('flickrApi'), i;

        httpBackend = $injector.get('$httpBackend');

        httpBackend.expectGET(flickrApi.getAlbumUrl()).respond(200, {photoset: photoset});

        for(i = 0; i < 10; i++){
            httpBackend.expectGET(flickrApi.getImageSizesUrl(photoset.photo[i].id)).respond(200, {sizes:sizes});
        }

        photosData = $injector.get('photosData');
    }));

    afterEach(function(){
        httpBackend.flush();
    });

    it('should call the flickr api and get album data', function(){
        photosData.getAllImages().then(function(albumData){
            expect(albumData.length).toBe(10);
        });
    });
});