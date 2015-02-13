angular.module('vmMusic').controller('videosCtrl', ['$scope', 'videosData', function($scope, videosData){
    'use strict';

	videosData.getYouTubeVideos().then(
		function(response){
			$scope.allVideos = videosData.sanitizeYouTubeVideos(response);
		}
	);	
}]);