'use strict';

angular.module('vmMusic').controller('bioCtrl', ['$scope', '$resource', function($scope, $resource){
	$scope.bio = $resource('/data/bio.json').get();
}]);