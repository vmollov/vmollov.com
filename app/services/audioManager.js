angular.module('vmMusic').factory('audioManager', function(){
    'use strict';

	var audioSrc;

	return {
		getCurrentlyPlayingAudio: function(){
			return audioSrc;
		},
		setCurrentlyPlayingAudio: function(src){
			audioSrc = src;
		}
	};
});