'use strict';

vmMusic.factory('newsData', function($resource){
	var newsResource = $resource('/data/news');
	
	return {
		getAllNewsItems: function(){
			return newsResource.query();
		}
	};
});