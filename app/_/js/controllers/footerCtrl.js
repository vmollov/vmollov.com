'use strict';

vmMusic.controller('footerCtrl', function($scope, contactData){
		$scope.about = contactData.getContactData();;
});