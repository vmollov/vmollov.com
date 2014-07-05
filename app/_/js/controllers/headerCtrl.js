'use strict';

vmMusic.controller('headerCtrl', function($scope, $location){
	
	$scope.$watch(
		function(){
			return $location.$$path;
		}, 
		function(){ 
			if(isCurrentPageHome()) swapBannerElements($(".regularBanner"), $(".homeBanner"), $(".banner")); //transition to home
			else swapBannerElements($(".homeBanner"), $(".regularBanner"), $(".banner")); //transition away from home
		}
	);
	
	$(window).resize(function(){ //event listener to resize the banner container
		$(".banner").height(
			isCurrentPageHome() ? $(".homeBanner").height():$(".regularBanner").height()
		);
	});
		
	$scope.displayFeatureEvent = isCurrentPageHome;
	
	//helper functions
	function isCurrentPageHome(){
		return $location.$$path == "/";
	}
	
	function swapBannerElements(removeElement, displayElement, parentElement){
		removeElement.animate({
			opacity: 0
		}, 200, function(){
			parentElement.animate({
				height: displayElement.height()
			}, 300, function(){
				displayElement.css("display", "inline");
				displayElement.animate({
					opacity:1
				});
				removeElement.css("display", "none");
			});
		});
	}		
});