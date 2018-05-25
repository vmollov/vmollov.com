describe('audioPlayer directive', function(){
    'use strict';

    var scope, isoScope, rootScope, element, playerElement;

    beforeEach(module('vmMusic', 'templates'));

    beforeEach(inject(function($injector){
        var compile = $injector.get('$compile');

        rootScope = $injector.get('$rootScope');
        scope = rootScope.$new();
        element="<audio-player></audio-player>";
        element = compile(element)(scope);
        scope.$digest();
        isoScope = element.isolateScope();

        playerElement = angular.element(element).find("#audioPlayer");
    }));

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
    it('should load the audio file and call play on the player element', function(){
        spyOn(playerElement.load().get(0), 'play').and.callThrough();
        rootScope.$broadcast('playAudioStartRequestEvent', {title: 'testAudio', src:'testAudioSrc'});
        expect(playerElement.find("#mpegSource").attr("src")).toContain('testAudioSrc');
        expect(playerElement.find("#oggSource").attr("src")).toContain('testAudioSrc');
        expect(playerElement.load().get(0).play).toHaveBeenCalled();
    });
    it('should stop playing and hide on playAudioStopRequestEvent', function(){
        spyOn(playerElement.get(0), 'pause').and.callThrough();
        rootScope.$broadcast('playAudioStopRequestEvent');
        expect(playerElement.get(0).pause).toHaveBeenCalled();
    });
    it('should toggle play/pause', function(){
        rootScope.$broadcast('playAudioStartRequestEvent', {title: 'testAudio', src:'testAudioSrc'});
        // expect(playerElement.get(0).paused).toBeFalsy();
        isoScope.togglePlay();
        expect(playerElement.get(0).paused).toBeTruthy();
    });
});