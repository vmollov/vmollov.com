'use strict';

vmMusic.directive('audioSample', function(audioManager){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: '/templates/directives/audioSample.html',
		scope:{
			src: "=",
			songTitle: "="
		},
		controller: function($scope, $rootScope){
			var playStatus = {playing: "/img/site/btnPause_audio.png", paused: "/img/site/btnPlay_audio.png"};
			$scope.btnPlay = {};
			
			//check whether this audio is currently being played
			if(audioManager.getCurrentlyPlayingAudio() == $scope.src) $scope.btnPlay.status = playStatus.playing; 
			else $scope.btnPlay.status = playStatus.paused;
			
			function changePlayStatus(status){
				if(status == "play") $scope.btnPlay.status = playStatus.playing;
				else $scope.btnPlay.status = playStatus.paused;
			}
		
			$scope.togglePlayPaused = function(){
				if($scope.btnPlay.status == playStatus.paused) $scope.playAudio();
				else $scope.pauseAudio();
			}
			$scope.playAudio = function(){
				changePlayStatus("play");
				$rootScope.$broadcast('playAudioStartRequestEvent', {src: $scope.src, title:$scope.songTitle});
			}
			$scope.pauseAudio = function(){
				changePlayStatus("pause");
				$rootScope.$broadcast('playAudioStopRequestEvent');
			}
			
			//handle player events
			$scope.$on('playAudioGlobalStopRequestEvent', function(){
				changePlayStatus("pause");
				$scope.$apply();
			});
			$scope.$on('playAudioGlobalStartRequestEvent', function(event, audioData){
				if(audioData.src == $scope.src) changePlayStatus('play');
				else changePlayStatus('pause');
				$scope.$apply();
			})

		}
	};
});