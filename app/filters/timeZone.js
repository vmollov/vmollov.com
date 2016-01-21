angular.module('vmMusic').filter('timeZone', [
	function(){
		'use strict';

		return function (val) {
			if (val != null && val.length > 16) {
				return val.substring(0, 16)
			}
			return val;
		};
	}
]);
