'use strict';

vmMusic.controller('bioCtrl', function($scope, $resource){
	$scope.bio = $resource('/data/bio').get();
});