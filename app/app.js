'use strict';

angular.module('vmMusic', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngTouch'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider){
			
			$routeProvider.when('/',
				{
					templateUrl:'/components/home.html',
					controller: 'homeCtrl'
				}
			);
			$routeProvider.when('/biography',
				{
					templateUrl: '/components/bio.html',
					controller: 'bioCtrl'
				}
			);
			$routeProvider.when('/calendar',
				{
					templateUrl: '/components/calendar.html',
					controller: 'calendarCtrl'
				}
			);
			$routeProvider.when('/recordings',
				{
					templateUrl: '/components/recordings.html',
					controller: 'recordingsCtrl'
				}
			);
			$routeProvider.when('/photos',
				{
					templateUrl: '/components/photos.html',
					controller: 'photosCtrl'
				}
			);
			$routeProvider.when('/videos',
				{
					templateUrl: '/components/videos.html',
					controller: 'videosCtrl'
				}
			);
			$routeProvider.when('/contact',
				{
					templateUrl: '/components/contact.html',
					controller: 'contactCtrl'
				}
			);
			
			$locationProvider.html5Mode(true).hashPrefix('!');
			
		}
	])
	
	.constant('gCalUrl', 'https://www.googleapis.com/calendar/v3/calendars/5s80mf8pl7rtkj9bpasndqqe58%40group.calendar.google.com/events?maxResults=30&orderBy=startTime&singleEvents=true&key=AIzaSyDRrUkiIxPAi_OtunVrHRhvikL7d83cQsI');

