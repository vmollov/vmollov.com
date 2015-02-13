angular.module('vmMusic').factory('welcomeData', ['$http', function($http){
    'use strict';

	var deferred = $http({method: 'GET', url:'data/welcome.json'}).then(
        function(response){
            return response.data;
        }
    );
	
	return {
		getWelcomeMessage: function(){
			return deferred;
		}
	};
}]);