angular.module('vmMusic').controller('contactCtrl', ['$scope', 'contactData', function($scope, contactData){
    'use strict';

    $scope.contact = contactData.getContactData();
}]);