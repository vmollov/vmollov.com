'use strict';

angular.module('vmMusic').controller('recordingsCtrl', ['$scope', 'recordingsData', function($scope, recordingsData){
		
	recordingsData.getAllRecordings().then(function(data){
		$scope.recordings = data;
		$scope.recordingsOrderPredicate = 'order';
	})
	
}]);