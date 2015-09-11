angular.module('vmMusic').factory('videosData', ['$http', 'youtubeApi', function($http, youtubeApi){
    'use strict';

	return {
		getYouTubeVideos: function(){
			return $http({method:'GET', url: youtubeApi.getFeedUrl()}).then(
                function(response){
                    return response.data.items;
                },
                function(status){
                    console.log("error fetching videos: " + status);
                }
            );
		},
		sanitizeYouTubeVideos: function(videos){
            var i, resultList = [];

			//remove excluded videos
			for(i = 0; i < videos.length; i++){
				if(youtubeApi.isExcluded(videos[i].id.videoId)) {
                    videos.splice(i, 1);
                }
			}

			for(i = 0; i < videos.length; i++){
				resultList.push({
					embedUrl: youtubeApi.getEmbedVideoUrl(videos[i]),
					title: videos[i].snippet.title,
					thumbnail: videos[i].snippet.thumbnails.default.url,
					description: videos[i].snippet.description
				});
			}
		
			return resultList;
		}
	};
}]);