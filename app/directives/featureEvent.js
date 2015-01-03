'use strict';

angular.module('vmMusic').directive('featureEvent', function(calendarData){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/featureEvent.html',
		scope:{
			display: '='
		},
		controller: function($scope){
		
			calendarData.getNextEvent().then(function(nextEvent){
				$scope.event = nextEvent;
			});
						
			$scope.$watch('display', function(){
				//animate the display of the next event box
				if($scope.display) displayFeatureEvent();
				else hideFeatureEvent();
			});
			
			//utility functions
			var displayAttemptCounter = 0;
			var displayTimeout;
			function displayFeatureEvent(){
				if(!$scope.display) return;
				if($scope.event == undefined){
					//after 30 unsuccesfull attempts do not display the feature event
					if(displayAttemptCounter < 30) setTimeout(displayFeatureEvent, 500);
					return;
				}
				displayTimeout = setTimeout(function(){
					$("#hEvent").toggleClass('displayControl', true);
					$("#hEvent").animate({
						opacity: 1
					}, 700);
				}, 1800);		
			}
			function hideFeatureEvent(){
				clearTimeout(displayTimeout);
				$("#hEvent").animate({
					opacity:0
				}, 400, function(){
					$("#hEvent").toggleClass('displayControl', false);
				});
			}
		}
	};
});