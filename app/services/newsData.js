angular.module('vmMusic').factory('newsData', ['$resource', function($resource){
    'use strict';
	var newsResource = $resource('/data/news.json');
	
	return {
		getAllNewsItems: function(){
			return newsResource.query();
		}
	};
}]);