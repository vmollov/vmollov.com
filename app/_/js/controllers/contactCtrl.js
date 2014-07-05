'use strict';

vmMusic.controller('contactCtrl', function($scope, contactData){
		$scope.contact = contactData.getContactData();	
});