angular.module('vmMusic').factory('featureData', ['$http', '$q', function($http, $q){
    'use strict';

    var deferred = $q.defer();

	return {
		getFeatures: function(){
			$http({method: 'GET', url: '/data/features.json'})
				.success(function(data){
					deferred.resolve(data);
				});
			
			return deferred.promise;
		}
	};
}]);