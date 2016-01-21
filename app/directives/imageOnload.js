angular.module('vmMusic').directive('onLoad', [
	function(){
        'use strict';

        return {
			restrict: 'A',
			replace: false,
			link: function(scope, element){
				element.bind('load', function(){
					scope.$apply(scope.callback(element));
				});
			},
			scope:{
				callback: "="
			}
		};
	}
]);