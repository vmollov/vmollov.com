angular.module('vmMusic').factory('contactData', [
	'$http',
	function($http){
		'use strict';

		var defer = $http({method: 'GET', url: '/data/about.json'}).then(
			function(response){
				return response.data;
			}
		);

		return{
			getContactData: function(){
				return defer;
			}
		};
	}
]);