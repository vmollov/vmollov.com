angular.module('vmMusic').factory('recordingsData', ['$http', '$q', function($http, $q){
    'use strict';

    var deferred = $q.defer();

	return {
		getAllRecordings: function(){
			$http({method:'GET', url:'/data/recordings.json'}).success(function(data){
				deferred.resolve(data);
			});
			return deferred.promise;
		}
	};
}]);