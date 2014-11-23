'use strict';

angular.module('vmMusic').controller('footerCtrl', function($scope, contactData){
		$scope.about = contactData.getContactData();;
});