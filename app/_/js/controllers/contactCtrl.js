'use strict';

angular.module('vmMusic').controller('contactCtrl', function($scope, contactData){
		$scope.contact = contactData.getContactData();	
});