'use strict';

/*
define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider.when("/home", angularAMD.route({
            templateUrl: 'views/home.html', controller: 'HomeCtrl',
            controllerUrl: 'ctrl/home'
        }))
    });
    return angularAMD.bootstrap(app);
});
*/

angular.module('vmMusic', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngTouch'])
.config(function($routeProvider, $locationProvider){
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
		
		$locationProvider.html5Mode(true).hashPrefix('!');
	})
.constant('gCalUrl', 'https://www.googleapis.com/calendar/v3/calendars/5s80mf8pl7rtkj9bpasndqqe58%40group.calendar.google.com/events?maxResults=30&orderBy=startTime&singleEvents=true&key=AIzaSyDRrUkiIxPAi_OtunVrHRhvikL7d83cQsI');
	