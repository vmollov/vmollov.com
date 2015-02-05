angular.module('vmMusic').factory('photosData', ['$http', '$q', function($http){
    'use strict';

	var
        apiKey = '48dad8a586fe5931b1db3c1026e0564b',
	    albumUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + apiKey + "&photoset_id=72157645114741942&extras=date_upload&format=json&nojsoncallback=1",
        getImageSizesUrl = function(photoId){
		    return "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + apiKey + "&photo_id=" + photoId + "&format=json&nojsoncallback=1";
        },
        getImageSizes = function(currentPhoto){
            $http({method:'GET', url:getImageSizesUrl(currentPhoto.id)}).then(function(result){
                currentPhoto.source = (function getSizes(images){
                    var imageSet = {}, i, length;
                    for(i = 0, length = images.length; i < length; i++){
                        if(images[i].label === "Square") {
                            imageSet.thumbnail = images[i].source;
                        }
                        if(images[i].label === "Medium") {
                            imageSet.medium = images[i].source;
                        }
                        if(images[i].label === "Original") {
                            imageSet.original = images[i].source;
                        }
                    }

                    return imageSet;
                }(result.data.sizes.size));
            });
        },
        getImages = function(data){
            var photos = data.data.photoset.photo, i, length;
            for(i = 0, length = photos.length; i < length; i++){
                getImageSizes(photos[i]);
            }

            return photos;
        },
	    albumData = $http({method:'GET', url: albumUrl}).then(getImages);
		
	return {
		getAllImages: function(){
			return albumData;
		}
	};
}]);