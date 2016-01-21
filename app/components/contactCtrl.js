angular.module('vmMusic').controller('contactCtrl', [
    '$scope',
    'contactData',
    function($scope, contactData){
        'use strict';

        contactData.getContactData().then(function(contactData){
            $scope.contact = contactData;
        });
    }
]);