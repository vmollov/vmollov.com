'use strict';

angular.module('vmMusic').controller('footerCtrl', ['$scope', 'contactData', function($scope, contactData){
		$scope.about = contactData.getContactData();;
}]);