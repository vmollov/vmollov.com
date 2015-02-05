angular.module('vmMusic').directive('audioPlayer', ['audioManager', function(audioManager){
    'use strict';

	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/audioPlayer.html',
		scope:{ },
		controller: function($scope, $rootScope){
			var playerContainer = $("#audioPlayerContainer"),
			    playerElement = $("#audioPlayer"),
			    playerVisible = false,
			    hidePlayerTimeout,
                //player show/hide
                showPlayer = function(){
                    if(playerVisible) {
                        return; //if player is already visible do nothing
                    }

                    playerContainer.css({'display':'block'});
                    playerContainer.animate({
                        bottom:1
                    }, 700, function(){
                        playerVisible = true;
                    });
                },
                hidePlayer = function(){
                    if(!playerElement.get(0).paused) return; //if the player is playing don't hide it

                    playerContainer.animate({
                        bottom:'-100%'
                    }, 700, function(){
                        playerVisible = false;
                        playerContainer.css({'display':'none'});
                    });
                },
                //player control functions
                play = function(){
                    showPlayer(); //show the player if hidden
                    clearTimeout(hidePlayerTimeout); //clear the hide player timeout if set

                    $("#mpegSource").attr("src", "/assets/audio/" + $scope.audioSrc + ".mp3");
                    $("#oggSource").attr("src", "/assets/audio/" + $scope.audioSrc + ".ogg");

                    playerElement.load().get(0).play();
                },
                stop = function(){
                    playerElement.get(0).pause();

                    hidePlayerTimeout = setTimeout(hidePlayer, 1500);
                };
						
			//player ui controls update
			$scope.btnPlayStatus = function(){
				if(playerElement.get(0).paused) {
                    return '/assets/img/site/btnPlay_audio.png';
                } else {
                    return '/assets/img/site/btnPause_audio.png';
                }
			};
			$scope.togglePlay = function(){
				if(playerElement.get(0).paused) {
                    play();
                }
				else {
                    stop();
                }
			};
			$scope.volume = 0.75;
			$scope.changeVolume = function(){
				playerElement.get(0).volume = $scope.volume;
			};
			$scope.timeIndicator = "0:00";
			playerElement.bind('timeupdate', function(){
				var seconds = Math.round(((this.currentTime/60)%1)*60);
				if(seconds < 10) seconds = '0' + seconds;
				var minutes = Math.floor(((this.currentTime/3600)%1)*60);
				if(minutes < 10) minutes = '0' + minutes;
				$scope.timeIndicator = minutes +':'+ seconds;
				$scope.$apply();
			});
			
			//handle a play/stop requests from the $rootScope
			$scope.$on('playAudioStartRequestEvent', function(event, audioParams){
				$scope.audioTitle = audioParams.title;	
				$scope.audioSrc = audioParams.src;	
				play();
			});
			$scope.$on('playAudioStopRequestEvent', stop);
								
			//events from the player controllers 
			playerElement.bind('pause', function(){
				audioManager.setCurrentlyPlayingAudio("");
				$rootScope.$broadcast('playAudioGlobalStopRequestEvent');
				stop();
			});
			playerElement.bind('play', function(){
				audioManager.setCurrentlyPlayingAudio($scope.audioSrc); //set this audio as the currently playing audio
				$rootScope.$broadcast('playAudioGlobalStartRequestEvent', {src: $scope.audioSrc});
			});
			playerElement.bind('ended', function(){
				$scope.timeIndicator = '00:00';
				$scope.$apply();
			});
		}
		
	};
}]);