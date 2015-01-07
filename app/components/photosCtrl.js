'use strict';

angular.module('vmMusic').controller('photosCtrl', ['$scope', 'photosData', function($scope, photosData){
	$scope.photos = [];
	
	photosData.getAllImages().then(
		function(data){
			$scope.photos[0] = data[0];
			
			//sort photos by dateuploaded
			for(var i=1; i<data.length; i++){
				var placedImage = false;
				for(var n=0; n<$scope.photos.length; n++){
					if(data[i].dateupload >= $scope.photos[n].dateupload){
						$scope.photos.splice(n, 0, data[i]);
						placedImage = true;
						break;
					}
				}
				if(!placedImage) $scope.photos.push(data[i]);
			}
			
			$scope.photo = $scope.photos[0];
			
			
		}	
	);
	
	var thumbsViewWidth = 0;
	var thumbsImageOffset = 0;
	var _Index = 0; //initial image index
	
	$scope.getThumbsWidth = function(){
		return {width: thumbsViewWidth + 'px'};
	}
	
	$scope.updateThumbViewWidth = function(imageElement){
		//when the thumbs all get loaded their width is added up to determine the width of the thumb slider
		thumbsViewWidth += imageElement.width() + 15;
	};

    $scope.isActive = function (index) {
    	return _Index === index;
    };
    
    $scope.updateSlideCaptionWidth = function(){
	    //fix for firefox
	    /*
$(".slideCaption").css({'width':'99%'});
        $(".slideCaption").css({'width':'100%'});
*/
    }

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
        
        //slide the thumbview
        if(index == $scope.photos.length-1) thumbsImageOffset = index - getThumbsViewBounds().high;
        while(thumbsImageOffset < index - getThumbsViewBounds().high && index<$scope.photos.length-1){
	        thumbsImageOffset++
        } 
        while(thumbsImageOffset > index - getThumbsViewBounds().low && thumbsImageOffset > 0){
        	thumbsImageOffset--
        }
        animateThumbView();
   	};

	//thumb view 	
	$scope.imageCounter = function(){
		return (_Index+1) + "/" + $scope.photos.length;
	}
	
	$scope.thumbViewNext = function(){
		if(thumbsImageOffset > $scope.photos.length - getThumbsViewBounds().high){
			thumbsImageOffset = $scope.photos.length - getThumbsViewBounds().high;
			return;
		} 
		
		thumbsImageOffset += 2;
		animateThumbView();
	};
	
	$scope.thumbViewPrevious = function(){
		if(thumbsImageOffset == 0) return;
		
		thumbsImageOffset -= 2;
		animateThumbView();
	};
	
	//bind keyboard keys and swipe actions
	$(document).keydown(function(e){
	    if (e.keyCode == 37) $scope.showPrev();
	    if (e.keyCode == 39) $scope.showNext();
	    $scope.$apply();
	});
	$scope.thumbViewSwipeAdvance = function(forward){
		forward ? thumbsImageOffset ++ : thumbsImageOffset --;
		forward ? $scope.thumbViewNext() : $scope.thumbViewPrevious();
	};
	
	//utility functions
	function animateThumbView(){
		var thumbSliderOffset = function(){
			var totalOffset = 0;
			var imageCounter = 0;
			var elementCollection = $("ul.nav>li>img");
			for(var i=0; i<thumbsImageOffset; i++){
				totalOffset += elementCollection[i].width + 10;
			}
			return totalOffset;
		}();
		
		$('.thumbSlider .nav').animate({
			marginLeft: -thumbSliderOffset
		}, 400);
	};
	
	function getThumbsViewBounds(){
		return { low: Math.floor(getNumberOfDisplayedThums() * (1/4)) + 1, high: Math.floor(getNumberOfDisplayedThums() * (3/4)) - 1 };
	}
	
	function getNumberOfDisplayedThums(){
		var avgThumbWidth = thumbsViewWidth / $scope.photos.length
		return $(".thumbSlider").width() / avgThumbWidth;
	}

}]);
