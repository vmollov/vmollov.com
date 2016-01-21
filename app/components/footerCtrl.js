angular.module('vmMusic').controller('footerCtrl', [
    '$scope',
    'contactData',
    function($scope, contactData){
        'use strict';

        contactData.getContactData().then(function(response){
            $scope.about = response;
        });

    }
]);