'use strict';

angular.module('vmMusic').controller('bioCtrl', function($scope, $resource){
	$scope.bio = $resource('/data/bio').get();
});