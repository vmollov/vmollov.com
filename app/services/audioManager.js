'use strict';

angular.module('vmMusic').factory('audioManager', function(){	
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