'use strict';

angular.module('vmMusic').controller('videosCtrl', function($scope, videosData){
	videosData.getYouTubeVideos().then(
		function(data){
			$scope.allVideos = videosData.sanitizeYouTubeVideos(data.feed.entry);
		},
		function(status){
			console.log("error fetching videos: " + status);
		}
	);
	
	
});