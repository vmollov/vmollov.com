'use strict';

angular.module('vmMusic').directive('onLoad', function(){
	return {
		restrict: 'A',
		replace: false,
		link: function(scope, element, attrs){
			element.bind('load', function(){
				scope.$apply(scope.callback(element));
			});
		},
		scope:{
			callback: "="
		}
	};
});