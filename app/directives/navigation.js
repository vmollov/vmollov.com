angular.module('vmMusic').directive('navigation', function(){
    'use strict';

	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/navigation.html',
		scope:{ },
		controller: function($scope, $location){
			$scope.currentPage = function(){
				if($location.$$path === "/") {
                    return "";
                }
                return " - " + $location.$$path.substr(1).toUpperCase();
			};
			
			$("li.hasSub").on('mouseleave',function(){
				$("li.hasSub").toggleClass("hover", false);
			});
			$('#close').on('touchstart',function(){
				$('li.hasSub').off('mouseover');
				
			});
			$("li.hasSub").on('click', function(){
				$("li.hasSub").toggleClass("hover");
			});			
			
			$(".menuTitle").on('click', function(){
				$("nav > ul li:not(.menuTitle)").toggleClass("menuItemOn");
				$(".menuItemOn:not(.hasSub)").off('click');
				
				$(".menuItemOn:not(.hasSub)").on('click', function(event){
					$("nav > ul li:not(.menuTitle)").toggleClass("menuItemOn", false);
				})
			});

		}
	};
});