'use strict';

angular.module('vmMusic').controller('contactCtrl', ['$scope', 'contactData', function($scope, contactData){
		$scope.contact = contactData.getContactData();	
}]);