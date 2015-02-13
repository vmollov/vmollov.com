angular.module('vmMusic').controller('photosCtrl', ['$scope', 'photosData', function($scope, photosData){
    'use strict';

    var thumbsViewWidth = 0,
        thumbsImageOffset = 0,
        _Index = 0, //initial image index
        //utility functions
        animateThumbView = function(){
            var thumbSliderOffset = (function(){
                var totalOffset = 0,
                    elementCollection = $("ul.nav>li>img"),
                    i;
                for(i = 0; i < thumbsImageOffset; i++){
                    totalOffset += elementCollection[i].width + 10;
                }
                return totalOffset;
            }());

            $('.thumbSlider .nav').animate({
                marginLeft: -thumbSliderOffset
            }, 400);
        },
        getNumberOfDisplayedThumbs = function(){
            var avgThumbWidth = thumbsViewWidth / $scope.photos.length;
            return $(".thumbSlider").width() / avgThumbWidth;
        },
        getThumbsViewBounds = function(){
            return {
                low: Math.floor(getNumberOfDisplayedThumbs() * (1/4)) + 1,
                high: Math.floor(getNumberOfDisplayedThumbs() * (3/4)) - 1
            };
        };

    $scope.photos = [];
	
	photosData.getAllImages().then(
		function(data){
            $scope.photos = data.sort(function(a, b){
                return b.dateupload - a.dateupload;
            });
			
			$scope.photo = $scope.photos[0];
		}	
	);

	$scope.getThumbsWidth = function(){
		return {width: thumbsViewWidth + 'px'};
	};
	
	$scope.updateThumbViewWidth = function(imageElement){ //not unit tested
		//when the thumbs all get loaded their width is added up to determine the width of the thumb slider
		thumbsViewWidth += imageElement.width() + 15;
	};

    $scope.isActive = function (index) {
    	return _Index === index;
    };

	//slider
    $scope.showPrev = function () {
        var index = (_Index > 0) ? _Index - 1 : $scope.photos.length - 1;
        $scope.showPhoto(index);
    };

    $scope.showNext = function () {
        var index = (_Index < $scope.photos.length - 1) ? _Index + 1 : 0;
        $scope.showPhoto(index);
    };

    $scope.showPhoto = function (index) {
        _Index = index;
        $scope.photo = $scope.photos[index];
        
        //slide the thumb view - not tested
        if(index === $scope.photos.length-1){
            thumbsImageOffset = index - getThumbsViewBounds().high;
        }
        while(thumbsImageOffset < index - getThumbsViewBounds().high && index < $scope.photos.length - 1){
	        thumbsImageOffset++;
        } 
        while(thumbsImageOffset > index - getThumbsViewBounds().low && thumbsImageOffset > 0){
        	thumbsImageOffset--;
        }
        animateThumbView();
   	};

	//thumb view 	
	$scope.imageCounter = function(){
		return (_Index+1) + "/" + $scope.photos.length;
	};
	
	$scope.thumbViewNext = function(){ //not tested
		if(thumbsImageOffset > $scope.photos.length - getThumbsViewBounds().high){
			thumbsImageOffset = $scope.photos.length - getThumbsViewBounds().high;
			return;
		} 
		
		thumbsImageOffset += 2;
		animateThumbView();
	};
	
	$scope.thumbViewPrevious = function(){ //not tested
		if(thumbsImageOffset === 0) {
            return;
        }
		
		thumbsImageOffset -= 2;
		animateThumbView();
	};
	
	//bind keyboard keys and swipe actions
	$(document).keydown(function(e){ //not tested
	    if (e.keyCode === 37) {
            $scope.showPrev();
        }
	    if (e.keyCode === 39) {
            $scope.showNext();
        }
	    $scope.$apply();
	});
	$scope.thumbViewSwipeAdvance = function(forward){
        if(forward){
            thumbsImageOffset ++;
            $scope.thumbViewNext();
        }else{
            thumbsImageOffset --;
            $scope.thumbViewPrevious();
        }
	};
}]);
