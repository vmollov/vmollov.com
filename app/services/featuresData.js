'use strict';

angular.module('vmMusic').factory('featureData', function($http, $q){	
	return {
		getFeatures: function(){
			var deferred = $q.defer();
			
			$http({method: 'GET', url: '/data/features'})
				.success(function(data){
					deferred.resolve(data);
				});
			
			return deferred.promise;
		}
	};
})