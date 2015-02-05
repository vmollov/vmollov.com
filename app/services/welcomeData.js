angular.module('vmMusic').factory('welcomeData', ['$http', '$q', function($http, $q){
    'use strict';

	var deferred = $q.defer();
	
	return {
		getWelcomeMessage: function(){
			$http({method: 'GET', url:'data/welcome.json'})
				.success(function(data){
					deferred.resolve(data);
				});
			return deferred.promise;
		}
	};
}]);