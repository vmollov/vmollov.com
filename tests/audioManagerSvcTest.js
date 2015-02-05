describe('audioManager Service', function(){
    'use strict';
    var audioManager;

    beforeEach(module('vmMusic'));
    beforeEach(inject(function($injector){
        audioManager = $injector.get('audioManager');
    }));

    it('Should return the value set', function(){
        audioManager.setCurrentlyPlayingAudio('testAudioTitle');
        expect(audioManager.getCurrentlyPlayingAudio()).toBe('testAudioTitle');
    });

});