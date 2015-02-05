angular.module('vmMusic').controller('bioCtrl', ['$scope', '$resource', function($scope, $resource){
    'use strict';
	$scope.bio = $resource('/data/bio.json').get();
}]);