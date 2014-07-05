'use strict';

vmMusic.factory('photosData', function($http, $q){	
	var apiKey = '48dad8a586fe5931b1db3c1026e0564b';
	var albumUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + apiKey + "&photoset_id=72157645114741942&format=json&nojsoncallback=1"
	
	function getImageSizesUrl(photoId){
		return "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + apiKey + "&photo_id=" + photoId + "&format=json&nojsoncallback=1"
	}
	
	var albumData = $http({method:'GET', url: albumUrl}).then(getImages);
	
	function getImages(data){
		var photos = data.data.photoset.photo;
		for(var i=0; i<photos.length; i++){			
			getImageSizes(photos[i]);
			
		}

		return photos;
	}
	
	function getImageSizes(currentPhoto){
		$http({method:'GET', url:getImageSizesUrl(currentPhoto.id)}).then(function(result){
			currentPhoto.source = function getSizes(images){
				var imageSet = {};
				for(var i=0; i<images.length; i++){
					if(images[i].label == "Square") imageSet.thumbnail = images[i].source;
					if(images[i].label == "Medium") imageSet.medium = images[i].source;
					if(images[i].label == "Original") imageSet.original = images[i].source
				}
				
				return imageSet;
			}(result.data.sizes.size);
		});
	}
		
	return {
		getAllImages: function(){
			return albumData;
		}
	};
});