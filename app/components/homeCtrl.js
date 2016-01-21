angular.module('vmMusic').controller('homeCtrl', [
	'$scope',
	'$sce',
	'welcomeData',
	'newsData',
	'featureData',
	function($scope, $sce, welcomeData, newsData, featureData){
		'use strict';

		//welcome section
		welcomeData.getWelcomeMessage().then(
			function(data){
				$scope.welcomeMessage = $sce.trustAsHtml(data.welcome);
			},
			function(status){
				console.log('error fetching welcome message: ' + status);
			}
		);

		//news section
		newsData.getAllNewsItems().then(function(response){
			$scope.news = response;
			$scope.newsOrderPredicate = '-id';
		});

		//features section
		featureData.getFeatures().then(
			function(data){
				$scope.videoFeatures = data.video;
				$scope.audioFeatures = data.audio;
				$scope.featuresOrderPredicate = 'order';
			},
			function(status){
				console.log("error fetching features: " + status);
			}
		);
	}
]);