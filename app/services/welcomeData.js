'use strict';

angular.module('vmMusic').factory('welcomeData', function($http, $q){
	var deferred = $q.defer();
	
	return {
		getWelcomeMessage: function(){
			$http({method: 'GET', url:'data/welcome'})
				.success(function(data){
					deferred.resolve(data);
				});
			return deferred.promise;
		}
	}
});