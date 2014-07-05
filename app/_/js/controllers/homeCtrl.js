'use strict';

vmMusic.controller('homeCtrl', function($scope, $sce, welcomeData, newsData, featureData){
	
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
	$scope.news = newsData.getAllNewsItems();
	$scope.newsOrderPredicate = '-id';
	
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
});