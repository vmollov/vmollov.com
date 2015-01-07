'use strict';

angular.module('vmMusic').factory('newsData', ['$resource', function($resource){
	var newsResource = $resource('/data/news.json');
	
	return {
		getAllNewsItems: function(){
			return newsResource.query();
		}
	};
}]);