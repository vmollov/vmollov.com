describe('audioPlayer directive', function(){
    'use strict';

    var scope, isoScope, rootScope, element, playerElement, mockAudioElement;

    beforeEach(module('vmMusic', 'templates'));

    beforeEach(inject(function($injector){
        var compile = $injector.get('$compile');

        rootScope = $injector.get('$rootScope');
        scope = rootScope.$new();
        element = "<audio-player></audio-player>";
        element = compile(element)(scope);
        scope.$digest();
        isoScope = element.isolateScope();

        playerElement = angular.element(element).find("#audioPlayer");

        // Mock the audio element's play method to return a resolved promise
        mockAudioElement = playerElement.get(0);
        if (mockAudioElement) {
            mockAudioElement.play = jasmine.createSpy('play').and.returnValue(Promise.resolve());
            mockAudioElement.pause = jasmine.createSpy('pause');
            mockAudioElement.load = jasmine.createSpy('load');
        }
    }));

    afterEach(function() {
        // Clean up to prevent unhandled promise rejections
        if (mockAudioElement) {
            mockAudioElement.pause();
        }
    });

    it('should set audioTitle and audioSrc on receiving playAudioStartRequestEvent', function(){
        rootScope.$broadcast('playAudioStartRequestEvent', {title: 'testAudio', src:'testAudioSrc'});
        expect(isoScope.audioTitle).toBe('testAudio');
        expect(isoScope.audioSrc).toBe('testAudioSrc');
    });

    it('should show the player dom element on receiving playAudioStartRequestEvent', function(){
        expect(angular.element(element).css('display')).toBe('');
        rootScope.$broadcast('playAudioStartRequestEvent', {title: 'testAudio', src:'testAudioSrc'});
        expect(angular.element(element).css('display')).toBe('block');
    });

    it('should load the audio file on receiving playAudioStartRequestEvent', function(){
        rootScope.$broadcast('playAudioStartRequestEvent', {title: 'testAudio', src:'testAudioSrc'});
        expect(playerElement.find("#mpegSource").attr("src")).toContain('testAudioSrc');
        expect(playerElement.find("#oggSource").attr("src")).toContain('testAudioSrc');
    });

    it('should call pause on playAudioStopRequestEvent', function(){
        rootScope.$broadcast('playAudioStopRequestEvent');
        expect(mockAudioElement.pause).toHaveBeenCalled();
    });

    it('should have togglePlay function available', function(){
        expect(typeof isoScope.togglePlay).toBe('function');
    });
});
