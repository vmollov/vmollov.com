angular.module('vmMusic').factory('newsData', ['$http', function($http){
    'use strict';

    var defer = $http({method: 'GET', url: '/data/news.json'}).then(
        function(response){
            return response.data;
        }
    );
	
	return {
		getAllNewsItems: function(){
            return defer;
		}
	};
}]);