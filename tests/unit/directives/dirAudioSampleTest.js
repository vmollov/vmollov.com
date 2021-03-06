describe('audioSample directive', function(){
    'use strict';

    var scope, isoScope, rootScope, element;

    beforeEach(module('vmMusic', 'templates'));

    beforeEach(inject(function($injector){
        var compile = $injector.get('$compile');

        rootScope = $injector.get('$rootScope');
        scope = rootScope.$new();
        element = '<audio-sample src="\'testAudio\'"></audio-sample>';
        element = compile(element)(scope);
        scope.$digest();
        isoScope = element.isolateScope();
    }));

    it('should change its play status', function(){
        isoScope.playAudio();
        expect(isoScope.btnPlay.status).toContain('btnPause_audio');
        isoScope.pauseAudio();
        expect(isoScope.btnPlay.status).toContain('btnPlay_audio');
        isoScope.togglePlayPaused();
        expect(isoScope.btnPlay.status).toContain('btnPause_audio');
    });

    it('should respond to broadcast events playAudioGlobalStopRequestEvent and playAudioGlobalStartRequestEvent', function(){
        rootScope.$broadcast('playAudioGlobalStartRequestEvent', {src: 'testAudio'});
        expect(isoScope.btnPlay.status).toContain('btnPause_audio');
        expect(angular.element(element).find('img').attr('src')).toContain('btnPause_audio');
        rootScope.$broadcast('playAudioGlobalStopRequestEvent');
        expect(isoScope.btnPlay.status).toContain('btnPlay_audio');
        expect(angular.element(element).find('img').attr('src')).toContain('btnPlay_audio');
    });
});