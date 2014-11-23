'use strict';

angular.module('vmMusic').controller('recordingsCtrl', function($scope, recordingsData){
		
	recordingsData.getAllRecordings().then(function(data){
		$scope.recordings = data;
		$scope.recordingsOrderPredicate = 'order';
	})
	
});