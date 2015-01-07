'use strict';

angular.module('vmMusic').factory('videosData', ['$http', '$q', function($http, $q){
	var searchTerm = 'Vladimir Mollov';
    var resultCount = 18;
	var excludeList = ["iUL7wOzp698", "FDFBDw97Epg", "tbQHOigF8WA", "WuZE2vidsIM", "U9Tb3HWkJRE"];
	resultCount += excludeList.length;
	
    var searchTerm = searchTerm.replace(/ +/, '/');
    var feedURL = "http://gdata.youtube.com/feeds/api/videos/-/" + searchTerm + "?max-results=" + resultCount + "&alt=json&orderby=published";
    
	function isExcluded(entryUrl){
		for(var i=0; i<excludeList.length; i++){
			if(entryUrl.indexOf(excludeList[i]) > -1){
				return true;
			}
		}
		return false;
	}
	function getVideoEmbedUrl(videoUrl){
		var url = videoUrl.media$group.media$content[0].url;
		return url.replace(/\/v\//, "/embed/") + "&autoplay=1";
	}
	function getVideoTitle(video){
		return video.media$group.media$title.$t;
	}
	function getVideoThumbnail(video){
		return video.media$group.media$thumbnail[1].url;
	}
	function getVideoDescription(video){
		return video.media$group.media$description.$t;
	}

	return {
		getYouTubeVideos: function(){
			var deferred = $q.defer();
			
			$http({method:'GET', url: feedURL}).success(function(data){
				deferred.resolve(data);
			});
			
			return deferred.promise;
		},
		sanitizeYouTubeVideos: function(feedEntries){
			//remove excluded videos
			for(var i=0; i<feedEntries.length; i++){
				if(isExcluded(feedEntries[i].id.$t)) feedEntries.splice(i, 1);
			}		
			
			var resultList = [];
			for(var i=0; i<feedEntries.length; i++){
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