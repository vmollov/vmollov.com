describe('photosCtrl controller', function () {
    'use strict';

    var scope,
        photosData = {
            getAllImages: function(){ return undefined; }
        };

    beforeEach(module('vmMusic'),  function ($provide) {
        $provide.value('photosData', photosData);
    });

    beforeEach(inject(function($injector){
        var calendarCtrl,
            controller = $injector.get('$controller'),
            defer = $injector.get('$q').defer();

        scope = $injector.get('$rootScope').$new();
        //photosData = $injector.get('photosData');
        photosData = {
            getAllImages: function(){
                return defer.promise;
            }
        };

        spyOn(photosData, 'getAllImages').and.returnValue(defer.promise);

        defer.resolve((function(){
            var resultObject = [],
                startId = 14453317200,
                startDateupload = 1405219854,
                i;

            for(i = 0; i < 10; i++){
                resultObject.push({
                    "id":(startId + i).toString(),
                    "title":"test title " + i,
                    "dateupload":(startDateupload + i).toString(),
                    sources: {
                        original: 'original_' + i + '.jpg',
                        medium: 'medium_' + i + '.jpg',
                        thumbnail: 'thumbnail_' + i + '.jpg'
                    }
                });
            }

            return resultObject;
        }()));

        calendarCtrl = controller('photosCtrl', {$scope: scope, photosData: photosData});
        scope.$apply();
    }));

    it('should call getAllImages on the photosData service', function(){
        expect(photosData.getAllImages).toHaveBeenCalled();
    });

    it('should have photos and sort them by dateupload, newest first', function(){
        var i, photoLength = scope.photos.length;

        expect(photoLength).toBeGreaterThan(0);
        for(i = 1; i< photoLength; i++){
            expect(scope.photos[i - 1].dateupload).toBeGreaterThan(scope.photos[i].dateupload);
        }
    });

    it('should calculate an estimated thumbViewWidth', function(){
        expect(scope.getThumbsWidth().width).toMatch(/\dpx/);
    });

    it('should navigate through photos', function(){
        expect(scope.isActive(0)).toBeTruthy();
        scope.showNext();
        expect(scope.isActive(0)).toBeFalsy();
        expect(scope.isActive(1)).toBeTruthy();
        scope.showPrev();
        expect(scope.isActive(0)).toBeTruthy();
    });

    it('should display a photo at selected index', function(){
        scope.showPhoto(7);
        expect(scope.photo).toBe(scope.photos[7]);
    });

    it('should have a correct photos count', function(){
        expect(scope.imageCounter()).toMatch(/\d\/10/);
    });

    it('should advance the thumbs view when thumbViewSwipeAdvance is called', function(){
        spyOn(scope, 'thumbViewNext');
        spyOn(scope, 'thumbViewPrevious');

        scope.thumbViewSwipeAdvance(true);
        scope.thumbViewSwipeAdvance();

        expect(scope.thumbViewNext).toHaveBeenCalled();
        expect(scope.thumbViewPrevious).toHaveBeenCalled();
    });
});