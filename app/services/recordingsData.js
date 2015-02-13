angular.module('vmMusic').factory('recordingsData', ['$http', function($http){
    'use strict';

    var deferred = $http({method:'GET', url:'/data/recordings.json'}).then(
        function(response){
            return response.data;
        }
    );

	return {
		getAllRecordings: function(){
			return deferred;
		}
	};
}]);