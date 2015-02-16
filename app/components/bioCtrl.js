angular.module('vmMusic').controller('bioCtrl', ['$scope', '$http', function($scope, $http){
    'use strict';

	$http.get('/data/bio.json').then(
        function(response){
            $scope.bio = response.data;
        },
        function(error){
            console.log('An error occurred while getting biography data. ' + error);
        }
    );
}]);