describe('videoSample directive', function(){
    'use strict';

    var isoScope, element, rootScope;

    beforeEach(module('vmMusic'));

    beforeEach(inject(function($injector){
        var scope,
            compile = $injector.get('$compile'),
            videoSrc = 'test.mp4',
            videoTitle = 'Test Title',
            videoThumbnail = 'test.jpg';

        rootScope = $injector.get('$rootScope');
        scope = rootScope.$new();
        element = '<video-sample video-src="videoSrc" video-title="videoTitle" video-thumbnail="videoThumbnail"></video-sample>';

        scope.videoSrc = videoSrc;
        scope.videoTitle = videoTitle;
        scope.videoThumbnail = videoThumbnail;

        element = compile(element)(scope);
        scope.$digest();
        isoScope = element.isolateScope();
    }));

    it('should broadcast playAudioStopRequestEvent on playVideo()', function(){
        spyOn(rootScope, '$broadcast');
        isoScope.playVideo();
        expect(rootScope.$broadcast).toHaveBeenCalledWith('playAudioStopRequestEvent');
    });

    it('should contain video information', function(){
        expect(isoScope.videoSrc).toBe('test.mp4');
        expect(isoScope.videoTitle).toBe('Test Title');
        expect(isoScope.videoThumbnail).toBe('test.jpg');
    });
});