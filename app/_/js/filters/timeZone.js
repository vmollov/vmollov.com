'use strict';

angular.module('vmMusic').filter('timeZone', function(){
	return function (val, offset) {
		if (val != null && val.length > 16) {
			return val.substring(0, 16)
		}    
		return val;
	};
});