angular.module('vmMusic').directive('audioSample', ['audioManager', function(audioManager){
	'use strict';

	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: '/directives/audioSample.html',
		scope:{
			src: "=",
			songTitle: "="
		},
		controller: function($scope, $rootScope){
			var playStatus = {
                    playing: "/assets/img/site/btnPause_audio.png",
                    paused: "/assets/img/site/btnPlay_audio.png"
                },
                changePlayStatus = function(status){
                    if(status === "play") {
                        $scope.btnPlay.status = playStatus.playing;
                    }
                    else {
                        $scope.btnPlay.status = playStatus.paused;
                    }
                };

			$scope.btnPlay = {};
			
			//check whether this audio is currently being played
			if(audioManager.getCurrentlyPlayingAudio() === $scope.src) {
                $scope.btnPlay.status = playStatus.playing;
            }
			else {
                $scope.btnPlay.status = playStatus.paused;
            }
		
			$scope.togglePlayPaused = function(){
				if($scope.btnPlay.status === playStatus.paused) {
                    $scope.playAudio();
                }
				else {
                    $scope.pauseAudio();
                }
			};
			$scope.playAudio = function(){
				changePlayStatus("play");
				$rootScope.$broadcast('playAudioStartRequestEvent', {src: $scope.src, title:$scope.songTitle});
			};
			$scope.pauseAudio = function(){
				changePlayStatus("pause");
				$rootScope.$broadcast('playAudioStopRequestEvent');
			};
			
			//handle player events
			$scope.$on('playAudioGlobalStopRequestEvent', function(){
				changePlayStatus("pause");
				$scope.$apply();
			});
			$scope.$on('playAudioGlobalStartRequestEvent', function(event, audioData){
				if(audioData.src === $scope.src) {
                    changePlayStatus('play');
                }
				else {
                    changePlayStatus('pause');
                }
				$scope.$apply();
			});
		}
	};
}]);