'use strict';

angular.module('vmMusic').factory('contactData', function($resource){	
	var newsResource = $resource('/data/about');

	return{
		getContactData: function(){
			return newsResource.get();
		}
	};
});