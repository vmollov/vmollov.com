'use strict';

vmMusic.directive('navigation', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/navigation.html',
		scope:{ },
		controller: function($scope){
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
				
				$(".menuItemOn:not(.hasSub)").on('click', function(event){
					var menuText = this.childNodes[0].innerHTML;
					menuText = menuText == "HOME"? "": " - " + menuText;
					
					if(menuText != undefined) $(".menuTitle > a").html("MENU" + menuText);
					$("nav > ul li:not(.menuTitle)").toggleClass("menuItemOn", false);
				})
			});

		}
	};
});