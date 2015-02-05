angular.module('vmMusic').factory('contactData', ['$resource', function($resource){
    'use strict';

	var contactResource = $resource('/data/about.json');

	return{
		getContactData: function(){
			return contactResource.get();
		}
	};
}]);