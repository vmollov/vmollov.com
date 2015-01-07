'use strict';

angular.module('vmMusic').directive('videoSample', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/videoSample.html',
		scope:{
			videoSrc: "=",
			videoTitle: "=",
			videoThumbnail: "="
		},
		controller: function($scope, $rootScope){
			$scope.playVideo = function(){
				$rootScope.$broadcast('playAudioStopRequestEvent'); //stop audio if playing
				displayVideoContainer();
			};
			
			//respond to a audioplay request
			$rootScope.$on('playAudioGlobalStartRequestEvent', hideVideoContainer);
			
			//utility classes
			function displayVideoContainer(){
				//if element already exist - just change the video playing
				if($('#videoPlayerContainer').length > 0) {
					$("#videoPlayerContainer iframe").attr('src', $scope.videoSrc);
					return;
				}
				
				var videoContainer = $("<div id='videoPlayerContainer'></div>");
				var controlFrame = $("<div class='closeOverlay'><a href='#' class='closeButton'>close<img src='/assets/img/site/btnPopupClose.png'/></a></div>");
				var videoFrame = $("<iframe width='" + (window.innerWidth*0.8) + "' height='" + (window.innerHeight*0.8) + "' src='" + $scope.videoSrc + "' frameborder='0' allowfullscreen></iframe>");
				
				videoContainer.append(controlFrame);
				videoContainer.append(videoFrame);
				
				$('body').append(videoContainer);
				videoContainer.animate({
					top:'10%'
				}, 700);
				
				//bind the close videoContainer events
				$('#videoPlayerContainer .closeButton').on('click', hideVideoContainer);
				$('#videoPlayerContainer').on('click', function(e) {
				    e.stopPropagation();
				});
				$('html').on('click', hideVideoContainer);
				$(document).keyup(function(e){ //bind escape key
					if(e.which == 27) hideVideoContainer();
				});
			}
			
			function hideVideoContainer(){
				$('#videoPlayerContainer').animate({
					top:'100%'
				}, 700, function(){
					$('#videoPlayerContainer').remove();
				});
				
				//remove the event bindings
				$('#videoPlayerContainer .closeButton').off('click', hideVideoContainer);
			}
			
			//add a binding to stop the propagation of click on video links
			$('.videoLink').on('click', function(e){
				e.stopPropagation();
			});
		}	
	};
});