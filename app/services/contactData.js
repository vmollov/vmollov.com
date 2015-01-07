'use strict';

angular.module('vmMusic').factory('contactData', ['$resource', function($resource){	
	var newsResource = $resource('/data/about.json');

	return{
		getContactData: function(){
			return newsResource.get();
		}
	};
}]);