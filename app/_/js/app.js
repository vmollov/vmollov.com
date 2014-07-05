'use strict';

var vmMusic = angular.module('vmMusic', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngTouch']);
	
vmMusic.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/',
			{
				templateUrl:'templates/home.html',
				controller: 'homeCtrl'
			}
		)
		$routeProvider.when('/biography',
			{
				templateUrl: 'templates/bio.html',
				controller: 'bioCtrl'
			}
		);
		$routeProvider.when('/calendar',
			{
				templateUrl: 'templates/calendar.html',
				controller: 'calendarCtrl'
			}
		);
		$routeProvider.when('/recordings',
			{
				templateUrl: 'templates/recordings.html',
				controller: 'recordingsCtrl'
			}
		);
		$routeProvider.when('/photos',
			{
				templateUrl: 'templates/photos.html',
				controller: 'photosCtrl'
			}
		);
		$routeProvider.when('/videos',
			{
				templateUrl: 'templates/videos.html',
				controller: 'videosCtrl'
			}
		);
		$routeProvider.when('/contact',
			{
				templateUrl: 'templates/contact.html',
				controller: 'contactCtrl'
			}
		);
		/*
$routeProvider.when('/compatibility', {});
		
		$routeProvider.otherwise({redirectTo: '/compatibility'});
*/
		$locationProvider.html5Mode(true).hashPrefix('!');
	});
	