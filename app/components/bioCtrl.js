angular.module('vmMusic').controller('bioCtrl', [
    '$scope',
    '$sce',
    '$http',
    function($scope, $sce, $http){
        'use strict';

        $http.get('/data/bio.json').then(
            function(response){
                $scope.bio = response.data;
                $scope.bio.biography = $sce.trustAsHtml(response.data.biography);
            },
            function(error){
                console.log('An error occurred while getting biography data. ' + error);
            }
        );
    }
]);