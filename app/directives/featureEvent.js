angular.module('vmMusic').directive('featureEvent', ['calendarData', function(calendarData){
    'use strict';

    return {
		restrict: 'E',
		replace: true,
		templateUrl: '/directives/featureEvent.html',
		scope:{
			display: '='
		},
		link: function(scope, element){
            var displayAttemptCounter = 0,
                displayTimeout,
                container = angular.element(element),
                displayFeatureEvent = function (){
                    if(!scope.display || scope.event === undefined) return;
                    displayTimeout = setTimeout(function(){
                        container.toggleClass('displayControl', true);
                        container.animate({
                            opacity: 1
                        }, 700);
                    }, 1800);
                },
                hideFeatureEvent = function(){
                    clearTimeout(displayTimeout);
                    container.animate({
                        opacity:0
                    }, 400, function(){
                        container.toggleClass('displayControl', false);
                    });
                };

			calendarData.getNextEvent().then(function(nextEvent){
				scope.event = nextEvent;
                displayFeatureEvent();
			});

			scope.$watch('display', function(){
				//animate the display of the next event box
				if(scope.display) displayFeatureEvent();
				else hideFeatureEvent();
			});
		}
	};
}]);