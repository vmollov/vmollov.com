angular.module('vmMusic').factory('contactData', ['$http', '$q', function($http, $q){
    'use strict';

	var defer = $q.defer();

    $http({method: 'GET', url: '/data/about.json'}).success(
        function(data){
            defer.resolve(data);
        }
    );

	return{
		getContactData: function(){
			return defer.promise;
		}
	};
}]);