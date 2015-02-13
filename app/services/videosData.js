angular.module('vmMusic').factory('videosData', ['$http', 'youtubeApi', function($http, youtubeApi){
    'use strict';

	var
        getVideoEmbedUrl = function(videoUrl){
            var url = videoUrl.media$group.media$content[0].url;
            return url.replace(/\/v\//, "/embed/") + "&autoplay=1";
        },
        getVideoTitle = function(video){
            return video.media$group.media$title.$t;
        },
        getVideoThumbnail = function(video){
            return video.media$group.media$thumbnail[1].url;
        },
        getVideoDescription = function(video){
            return video.media$group.media$description.$t;
        };

	return {
		getYouTubeVideos: function(){
			return $http({method:'GET', url: youtubeApi.getFeedUrl()}).then(
                function(response){
                    return response.data.feed.entry;
                },
                function(status){
                    console.log("error fetching videos: " + status);
                }
            );
		},
		sanitizeYouTubeVideos: function(feedEntries){
            var i, resultList = [];

			//remove excluded videos
			for(i = 0; i < feedEntries.length; i++){
				if(youtubeApi.isExcluded(feedEntries[i].id.$t)) {
                    feedEntries.splice(i, 1);
                }
			}

			for(i = 0; i < feedEntries.length; i++){
				resultList.push({
					embedUrl: getVideoEmbedUrl(feedEntries[i]),
					title: getVideoTitle(feedEntries[i]),
					thumbnail: getVideoThumbnail(feedEntries[i]),
					description: getVideoDescription(feedEntries[i])
				});
			}
		
			return resultList;
		}
	};
}]);