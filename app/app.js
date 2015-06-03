'use strict';

angular.module('vmMusic', ['ngRoute', 'ngSanitize', 'ngTouch'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider){
			$routeProvider.when('/', {
					templateUrl:'/components/home.html',
					controller: 'homeCtrl'
				}
			);
			$routeProvider.when('/biography', {
					templateUrl: '/components/bio.html',
					controller: 'bioCtrl'
				}
			);
			$routeProvider.when('/calendar', {
					templateUrl: '/components/calendar.html',
					controller: 'calendarCtrl'
				}
			);
			$routeProvider.when('/recordings', {
					templateUrl: '/components/recordings.html',
					controller: 'recordingsCtrl'
				}
			);
			$routeProvider.when('/photos', {
					templateUrl: '/components/photos.html',
					controller: 'photosCtrl'
				}
			);
			$routeProvider.when('/videos', {
					templateUrl: '/components/videos.html',
					controller: 'videosCtrl'
				}
			);
			$routeProvider.when('/contact', {
					templateUrl: '/components/contact.html',
					controller: 'contactCtrl'
				}
			);
            $routeProvider.otherwise({ redirectTo: '/' });
			
			$locationProvider.html5Mode(true).hashPrefix('!');
		}
	])
	
	.constant('gCalUrl', 'https://www.googleapis.com/calendar/v3/calendars/5s80mf8pl7rtkj9bpasndqqe58%40group.calendar.google.com/events?maxResults=30&orderBy=startTime&singleEvents=true&key=AIzaSyDRrUkiIxPAi_OtunVrHRhvikL7d83cQsI')

    .constant('youtubeApi', {
		apiKey: 'AIzaSyDRrUkiIxPAi_OtunVrHRhvikL7d83cQsI',
        searchTerm: 'Vladimir Mollov',
        resultCount: 18,
        excludeList: ["iUL7wOzp698", "FDFBDw97Epg", "tbQHOigF8WA", "WuZE2vidsIM", "U9Tb3HWkJRE", "xLWH0DOJ6Co", "_W4aOMpTtWA"],
        getFeedUrl: function(){
            return 'https://www.googleapis.com/youtube/v3/search?order=date&part=id%2Csnippet&type=video&q=' + this.searchTerm.replace(/ +/, '+') + '&maxResults=' + (this.resultCount + this.excludeList.length) + '&key=' + this.apiKey;
        },
        isExcluded: function(videoId){
            return this.excludeList.indexOf(videoId) > -1;
        },
		getEmbedVideoUrl: function(video){
			return 'https://www.youtube.com/embed/' + video.id.videoId + '?autoplay=1';
		}
    })

    .constant('flickrApi', {
        apiKey: '48dad8a586fe5931b1db3c1026e0564b',
        getAlbumUrl: function(){
            return "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + this.apiKey + "&photoset_id=72157645114741942&extras=date_upload&format=json&nojsoncallback=1";
        },
        getImageSizesUrl: function(photoId){
            return "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + this.apiKey + "&photo_id=" + photoId + "&format=json&nojsoncallback=1";
        }
    });

