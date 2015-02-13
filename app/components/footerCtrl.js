angular.module('vmMusic').controller('footerCtrl', ['$scope', 'contactData', function($scope, contactData){
    'use strict';

    $scope.about = contactData.getContactData();
}]);