'use strict';

angular.module('vmMusic').factory('recordingsData', ['$http', '$q', function($http, $q){
	return {
		getAllRecordings: function(){
			var deferred = $q.defer();
			$http({method:'GET', url:'/data/recordings.json'}).success(function(data){
				deferred.resolve(data);
			})
			return deferred.promise;
		}
	};
}]);