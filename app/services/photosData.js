angular.module('vmMusic').factory('photosData', ['$http', 'flickrApi', function($http, photosApi){
    'use strict';

	var
        getImageSizes = function(currentPhoto){
            $http({method:'GET', url:photosApi.getImageSizesUrl(currentPhoto.id)}).then(
                function(response){
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
                    }(response.data.sizes.size));
                }
            );
        },
        getImages = function(response){
            var photos = response.data.photoset.photo, i, length;
            for(i = 0, length = photos.length; i < length; i++){
                getImageSizes(photos[i]);
            }

            return photos;
        },
	    albumData = $http({method:'GET', url: photosApi.getAlbumUrl()}).then(getImages);
		
	return {
		getAllImages: function(){
			return albumData;
		}
	};
}]);