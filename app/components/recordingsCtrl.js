angular.module('vmMusic').controller('recordingsCtrl', ['$scope', 'recordingsData', function($scope, recordingsData){
    'use strict';

	recordingsData.getAllRecordings().then(function(data){
		$scope.recordings = data;
		$scope.recordingsOrderPredicate = 'order';
	});
}]);