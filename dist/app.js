var _gaq = _gaq || [];
_gaq.push([
  '_setAccount',
  'UA-38398614-1'
]);
_gaq.push(['_trackPageview']);
(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
}());
'use strict';
angular.module('vmMusic', [
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config([
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: '/components/home.html',
      controller: 'homeCtrl'
    });
    $routeProvider.when('/biography', {
      templateUrl: '/components/bio.html',
      controller: 'bioCtrl'
    });
    $routeProvider.when('/calendar', {
      templateUrl: '/components/calendar.html',
      controller: 'calendarCtrl'
    });
    $routeProvider.when('/recordings', {
      templateUrl: '/components/recordings.html',
      controller: 'recordingsCtrl'
    });
    $routeProvider.when('/photos', {
      templateUrl: '/components/photos.html',
      controller: 'photosCtrl'
    });
    $routeProvider.when('/videos', {
      templateUrl: '/components/videos.html',
      controller: 'videosCtrl'
    });
    $routeProvider.when('/contact', {
      templateUrl: '/components/contact.html',
      controller: 'contactCtrl'
    });
    $routeProvider.otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]).constant('gCalUrl', 'https://www.googleapis.com/calendar/v3/calendars/5s80mf8pl7rtkj9bpasndqqe58%40group.calendar.google.com/events?maxResults=30&orderBy=startTime&singleEvents=true&key=AIzaSyDRrUkiIxPAi_OtunVrHRhvikL7d83cQsI').constant('youtubeApi', {
  apiKey: 'AIzaSyDRrUkiIxPAi_OtunVrHRhvikL7d83cQsI',
  searchTerm: 'Vladimir Mollov',
  resultCount: 18,
  excludeList: [
    'iUL7wOzp698',
    'FDFBDw97Epg',
    'tbQHOigF8WA',
    'WuZE2vidsIM',
    'U9Tb3HWkJRE',
    'xLWH0DOJ6Co',
    '_W4aOMpTtWA'
  ],
  getFeedUrl: function () {
    return 'https://www.googleapis.com/youtube/v3/search?order=date&part=id%2Csnippet&type=video&q=' + this.searchTerm.replace(/ +/, '+') + '&maxResults=' + (this.resultCount + this.excludeList.length) + '&key=' + this.apiKey;
  },
  isExcluded: function (videoId) {
    return this.excludeList.indexOf(videoId) > -1;
  },
  getEmbedVideoUrl: function (video) {
    return 'https://www.youtube.com/embed/' + video.id.videoId + '?autoplay=1';
  }
}).constant('flickrApi', {
  apiKey: '48dad8a586fe5931b1db3c1026e0564b',
  getAlbumUrl: function () {
    return 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + this.apiKey + '&photoset_id=72157645114741942&extras=date_upload&format=json&nojsoncallback=1';
  },
  getImageSizesUrl: function (photoId) {
    return 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=' + this.apiKey + '&photo_id=' + photoId + '&format=json&nojsoncallback=1';
  }
});
var Browser = {
    IsIe: function () {
      return navigator.appVersion.indexOf('MSIE') !== -1;
    },
    Version: function () {
      // we assume a sane browser and downgrade if necessary
      return version = navigator.appVersion.indexOf('MSIE') != -1 ? parseFloat(navigator.appVersion.split('MSIE')[1]) : 999;
    }
  };
//redirect to classic site if IE9 or lower
if (Browser.IsIe() && Browser.Version() <= 9) {
  window.location.href = 'http://' + window.location.host + '/compatibility.html';
}
angular.module('vmMusic').factory('audioManager', function () {
  'use strict';
  var audioSrc;
  return {
    getCurrentlyPlayingAudio: function () {
      return audioSrc;
    },
    setCurrentlyPlayingAudio: function (src) {
      audioSrc = src;
    }
  };
});
angular.module('vmMusic').factory('calendarData', [
  '$http',
  'gCalUrl',
  function ($http, gCalUrl) {
    'use strict';
    var calData = $http({
        method: 'GET',
        url: gCalUrl
      }).then(function (response) {
        return response.data.items;
      }, function (error) {
        console.log('An error occurred while getting calendar events. ' + error);
      }),
      //creates a calendar event object from the retrieved raw json
      getCalendarEventFromRawData = function (data) {
        return {
          title: data.summary,
          startTime: data.start.dateTime,
          location: data.location,
          description: data.description
        };
      }, parseCalendarData = function (data, boolFuture) {
        var events = [], i, length, thisEvent, startTime;
        for (i = 0, length = data.length; i < length; i++) {
          thisEvent = getCalendarEventFromRawData(data[i]);
          startTime = new Date(thisEvent.startTime);
          //if future events were requested process dates greater than now otherwise process dates in the past
          if (startTime > new Date() && boolFuture || startTime < new Date() && !boolFuture) {
            events.push(thisEvent);
          }
        }
        return events;
      }, upcomingEvents = calData.then(function (data) {
        return parseCalendarData(data, true);
      }), recentEvents = calData.then(function (data) {
        return parseCalendarData(data, false);
      }), nextEvent = calData.then(function (data) {
        var nextEventData, i, length, thisEvent, startTime;
        for (i = 0, length = data.length; i < length; i++) {
          thisEvent = getCalendarEventFromRawData(data[i]);
          startTime = new Date(thisEvent.startTime);
          if (startTime > new Date()) {
            if (nextEventData === undefined || startTime < new Date(nextEventData.startTime)) {
              nextEventData = thisEvent;
            }
          }
        }
        return nextEventData;
      });
    return {
      getUpcomingEvents: function () {
        return upcomingEvents;
      },
      getRecentEvents: function () {
        return recentEvents;
      },
      getNextEvent: function () {
        return nextEvent;
      }
    };
  }
]);
angular.module('vmMusic').factory('contactData', [
  '$http',
  function ($http) {
    'use strict';
    var defer = $http({
        method: 'GET',
        url: '/data/about.json'
      }).then(function (response) {
        return response.data;
      });
    return {
      getContactData: function () {
        return defer;
      }
    };
  }
]);
angular.module('vmMusic').factory('featureData', [
  '$http',
  function ($http) {
    'use strict';
    var deferred = $http({
        method: 'GET',
        url: '/data/features.json'
      }).then(function (response) {
        return response.data;
      });
    return {
      getFeatures: function () {
        return deferred;
      }
    };
  }
]);
angular.module('vmMusic').factory('geolocationService', [
  '$window',
  '$q',
  function ($window, $q) {
    'use strict';
    //not tested
    var mapDeferred = $q.defer(), loadGoogleMapsScript = function () {
        var googleMapsScript = document.createElement('script'), scriptHolder = document.getElementsByTagName('script')[0];
        googleMapsScript.src = '//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize';
        googleMapsScript.type = 'text/javascript';
        googleMapsScript.async = 'true';
        scriptHolder.parentNode.insertBefore(googleMapsScript, scriptHolder);
      }, detectedLocation = null, detectLocation = function () {
        var deferred = $q.defer();
        if (!detectedLocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            detectedLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            deferred.resolve(detectedLocation);
          });
        } else {
          deferred.resolve(detectedLocation);
        }
        return deferred.promise;
      }, distanceServiceDeferred = $q.defer();
    $window.initialize = function () {
      mapDeferred.resolve();
      distanceServiceDeferred.resolve(new google.maps.DistanceMatrixService());
    };
    loadGoogleMapsScript();
    return {
      getMap: function () {
        return mapDeferred.promise;
      },
      mapLocationInElement: function (location, element) {
        mapDeferred.promise.then(function () {
          var geocoder = new google.maps.Geocoder(), mapOptions = {
              zoom: 12,
              mapMaker: true,
              mapTypeControl: false,
              overviewMapControl: false,
              streetViewControl: false,
              zoomControl: false
            };
          geocoder.geocode({ 'address': location }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              var map = new google.maps.Map(element, mapOptions), marker = new google.maps.Marker({
                  map: map,
                  clickable: true,
                  flat: true,
                  position: results[0].geometry.location,
                  visible: true
                });
              map.setCenter(results[0].geometry.location);
            } else {
              console.log('Geocode was not successful for the following reason: ' + status);
            }
          });
        });
      },
      getDistance: function (toLocation) {
        var deferred = $q.defer(),
          //depending on the detected location from the browser and the distance service which comes with google maps api
          dependencies = $q.all([
            detectLocation(),
            distanceServiceDeferred.promise
          ]);
        dependencies.then(function (values) {
          var fromLocation = values[0],
            //detected location
            distanceService = values[1];
          //google Maps distance service
          distanceService.getDistanceMatrix({
            origins: [fromLocation],
            destinations: [toLocation],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            durationInTraffic: true,
            avoidHighways: false,
            avoidTolls: false
          }, function (distanceObject) {
            deferred.resolve({
              distance: distanceObject.rows[0].elements[0].distance.text,
              duration: distanceObject.rows[0].elements[0].duration.text
            });
          });
        });
        return deferred.promise;
      }
    };
  }
]);
angular.module('vmMusic').factory('newsData', [
  '$http',
  function ($http) {
    'use strict';
    var defer = $http({
        method: 'GET',
        url: '/data/news.json'
      }).then(function (response) {
        return response.data;
      });
    return {
      getAllNewsItems: function () {
        return defer;
      }
    };
  }
]);
angular.module('vmMusic').factory('photosData', [
  '$http',
  'flickrApi',
  function ($http, photosApi) {
    'use strict';
    var getImageSizes = function (currentPhoto) {
        $http({
          method: 'GET',
          url: photosApi.getImageSizesUrl(currentPhoto.id)
        }).then(function (response) {
          currentPhoto.source = function getSizes(images) {
            var imageSet = {}, i, length;
            for (i = 0, length = images.length; i < length; i++) {
              if (images[i].label === 'Square') {
                imageSet.thumbnail = images[i].source;
              }
              if (images[i].label === 'Medium') {
                imageSet.medium = images[i].source;
              }
              if (images[i].label === 'Original') {
                imageSet.original = images[i].source;
              }
            }
            return imageSet;
          }(response.data.sizes.size);
        });
      }, getImages = function (response) {
        var photos = response.data.photoset.photo, i, length;
        for (i = 0, length = photos.length; i < length; i++) {
          getImageSizes(photos[i]);
        }
        return photos;
      }, albumData = $http({
        method: 'GET',
        url: photosApi.getAlbumUrl()
      }).then(getImages);
    return {
      getAllImages: function () {
        return albumData;
      }
    };
  }
]);
angular.module('vmMusic').factory('recordingsData', [
  '$http',
  function ($http) {
    'use strict';
    var deferred = $http({
        method: 'GET',
        url: '/data/recordings.json'
      }).then(function (response) {
        return response.data;
      });
    return {
      getAllRecordings: function () {
        return deferred;
      }
    };
  }
]);
angular.module('vmMusic').factory('videosData', [
  '$http',
  'youtubeApi',
  function ($http, youtubeApi) {
    'use strict';
    return {
      getYouTubeVideos: function () {
        return $http({
          method: 'GET',
          url: youtubeApi.getFeedUrl()
        }).then(function (response) {
          return response.data.items;
        }, function (status) {
          console.log('error fetching videos: ' + status);
        });
      },
      sanitizeYouTubeVideos: function (videos) {
        var i, resultList = [];
        //remove excluded videos
        for (i = 0; i < videos.length; i++) {
          if (youtubeApi.isExcluded(videos[i].id.videoId)) {
            videos.splice(i, 1);
          }
        }
        for (i = 0; i < videos.length; i++) {
          resultList.push({
            embedUrl: youtubeApi.getEmbedVideoUrl(videos[i]),
            title: videos[i].snippet.title,
            thumbnail: videos[i].snippet.thumbnails.default.url,
            description: videos[i].snippet.description
          });
        }
        return resultList;
      }
    };
  }
]);
angular.module('vmMusic').factory('welcomeData', [
  '$http',
  function ($http) {
    'use strict';
    var deferred = $http({
        method: 'GET',
        url: 'data/welcome.json'
      }).then(function (response) {
        return response.data;
      });
    return {
      getWelcomeMessage: function () {
        return deferred;
      }
    };
  }
]);
angular.module('vmMusic').controller('bioCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    'use strict';
    $http.get('/data/bio.json').then(function (response) {
      $scope.bio = response.data;
    }, function (error) {
      console.log('An error occurred while getting biography data. ' + error);
    });
  }
]);
angular.module('vmMusic').controller('calendarCtrl', [
  '$scope',
  'calendarData',
  function ($scope, calendarData) {
    'use strict';
    calendarData.getUpcomingEvents().then(function (data) {
      $scope.upcomingEvents = data;
      $scope.upcommingEventOrderPredicate = 'startTime';
    }, function (status) {
      console.log('error retrieving upcoming events: ' + status);
    });
    calendarData.getRecentEvents().then(function (data) {
      $scope.recentEvents = data;
      $scope.recentEventOrderPredicate = '-startTime';
    }, function (status) {
      console.log('error retrieving recent events: ' + status);
    });
  }
]);
angular.module('vmMusic').controller('contactCtrl', [
  '$scope',
  'contactData',
  function ($scope, contactData) {
    'use strict';
    contactData.getContactData().then(function (contactData) {
      $scope.contact = contactData;
    });
  }
]);
angular.module('vmMusic').controller('footerCtrl', [
  '$scope',
  'contactData',
  function ($scope, contactData) {
    'use strict';
    contactData.getContactData().then(function (response) {
      $scope.about = response;
    });
  }
]);
angular.module('vmMusic').controller('headerCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    'use strict';
    var parentElement = angular.element('.banner'), regularBanner = angular.element('.regularBanner'), homeBanner = angular.element('.homeBanner'),
      //helper functions
      isCurrentPageHome = function () {
        return $location.$$path === '/';
      }, swapBannerElements = function (removeElement, displayElement, parentElement) {
        removeElement.animate({ opacity: 0 }, 200, function () {
          parentElement.animate({ height: displayElement.height() }, 300, function () {
            displayElement.css('display', 'inline');
            displayElement.animate({ opacity: 1 });
            removeElement.css('display', 'none');
          });
        });
      };
    $scope.$watch(function () {
      return $location.$$path;
    }, function () {
      if (isCurrentPageHome()) {
        //transition to home
        swapBannerElements(regularBanner, homeBanner, parentElement);
      } else {
        //transition away from home
        swapBannerElements(homeBanner, regularBanner, parentElement);
      }
    });
    angular.element(window).resize(function () {
      //event listener to resize the banner container
      parentElement.height(isCurrentPageHome() ? homeBanner.height() : regularBanner.height());
    });
    $scope.displayFeatureEvent = isCurrentPageHome;
  }
]);
angular.module('vmMusic').controller('homeCtrl', [
  '$scope',
  '$sce',
  'welcomeData',
  'newsData',
  'featureData',
  function ($scope, $sce, welcomeData, newsData, featureData) {
    'use strict';
    //welcome section
    welcomeData.getWelcomeMessage().then(function (data) {
      $scope.welcomeMessage = $sce.trustAsHtml(data.welcome);
    }, function (status) {
      console.log('error fetching welcome message: ' + status);
    });
    //news section
    newsData.getAllNewsItems().then(function (response) {
      $scope.news = response;
      $scope.newsOrderPredicate = '-id';
    });
    //features section
    featureData.getFeatures().then(function (data) {
      $scope.videoFeatures = data.video;
      $scope.audioFeatures = data.audio;
      $scope.featuresOrderPredicate = 'order';
    }, function (status) {
      console.log('error fetching features: ' + status);
    });
  }
]);
angular.module('vmMusic').controller('photosCtrl', [
  '$scope',
  'photosData',
  function ($scope, photosData) {
    'use strict';
    var thumbsViewWidth = 0, thumbsImageOffset = 0, _Index = 0,
      //initial image index
      //utility functions
      animateThumbView = function () {
        var thumbSliderOffset = function () {
            var totalOffset = 0, elementCollection = $('ul.nav>li>img'), i;
            for (i = 0; i < thumbsImageOffset; i++) {
              totalOffset += elementCollection[i].width + 10;
            }
            return totalOffset;
          }();
        $('.thumbSlider .nav').animate({ marginLeft: -thumbSliderOffset }, 400);
      }, getNumberOfDisplayedThumbs = function () {
        var avgThumbWidth = thumbsViewWidth / $scope.photos.length;
        return $('.thumbSlider').width() / avgThumbWidth;
      }, getThumbsViewBounds = function () {
        return {
          low: Math.floor(getNumberOfDisplayedThumbs() * (1 / 4)) + 1,
          high: Math.floor(getNumberOfDisplayedThumbs() * (3 / 4)) - 1
        };
      };
    $scope.photos = [];
    photosData.getAllImages().then(function (data) {
      $scope.photos = data.sort(function (a, b) {
        return b.dateupload - a.dateupload;
      });
      $scope.photo = $scope.photos[0];
    });
    $scope.getThumbsWidth = function () {
      return { width: thumbsViewWidth + 'px' };
    };
    $scope.updateThumbViewWidth = function (imageElement) {
      //not unit tested
      //when the thumbs all get loaded their width is added up to determine the width of the thumb slider
      thumbsViewWidth += imageElement.width() + 15;
    };
    $scope.isActive = function (index) {
      return _Index === index;
    };
    //slider
    $scope.showPrev = function () {
      var index = _Index > 0 ? _Index - 1 : $scope.photos.length - 1;
      $scope.showPhoto(index);
    };
    $scope.showNext = function () {
      var index = _Index < $scope.photos.length - 1 ? _Index + 1 : 0;
      $scope.showPhoto(index);
    };
    $scope.showPhoto = function (index) {
      _Index = index;
      $scope.photo = $scope.photos[index];
      //slide the thumb view - not tested
      if (index === $scope.photos.length - 1) {
        thumbsImageOffset = index - getThumbsViewBounds().high;
      }
      while (thumbsImageOffset < index - getThumbsViewBounds().high && index < $scope.photos.length - 1) {
        thumbsImageOffset++;
      }
      while (thumbsImageOffset > index - getThumbsViewBounds().low && thumbsImageOffset > 0) {
        thumbsImageOffset--;
      }
      animateThumbView();
    };
    //thumb view 	
    $scope.imageCounter = function () {
      return _Index + 1 + '/' + $scope.photos.length;
    };
    $scope.thumbViewNext = function () {
      //not tested
      if (thumbsImageOffset > $scope.photos.length - getThumbsViewBounds().high) {
        thumbsImageOffset = $scope.photos.length - getThumbsViewBounds().high;
        return;
      }
      thumbsImageOffset += 2;
      animateThumbView();
    };
    $scope.thumbViewPrevious = function () {
      //not tested
      if (thumbsImageOffset === 0) {
        return;
      }
      thumbsImageOffset -= 2;
      animateThumbView();
    };
    //bind keyboard keys and swipe actions
    $(document).keydown(function (e) {
      //not tested
      if (e.keyCode === 37) {
        $scope.showPrev();
      }
      if (e.keyCode === 39) {
        $scope.showNext();
      }
      $scope.$apply();
    });
    $scope.thumbViewSwipeAdvance = function (forward) {
      if (forward) {
        thumbsImageOffset++;
        $scope.thumbViewNext();
      } else {
        thumbsImageOffset--;
        $scope.thumbViewPrevious();
      }
    };
  }
]);
angular.module('vmMusic').controller('recordingsCtrl', [
  '$scope',
  'recordingsData',
  function ($scope, recordingsData) {
    'use strict';
    recordingsData.getAllRecordings().then(function (data) {
      $scope.recordings = data;
      $scope.recordingsOrderPredicate = 'order';
    });
  }
]);
angular.module('vmMusic').controller('videosCtrl', [
  '$scope',
  'videosData',
  function ($scope, videosData) {
    'use strict';
    videosData.getYouTubeVideos().then(function (response) {
      $scope.allVideos = videosData.sanitizeYouTubeVideos(response);
    });
  }
]);
angular.module('vmMusic').directive('audioPlayer', [
  'audioManager',
  function (audioManager) {
    'use strict';
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/directives/audioPlayer.html',
      scope: {},
      controller: [
        '$scope',
        '$rootScope',
        '$element',
        function ($scope, $rootScope, $element) {
          var playerContainer = angular.element($element), playerElement = playerContainer.find('#audioPlayer'), playerVisible = false, hidePlayerTimeout,
            //player show/hide
            showPlayer = function () {
              if (playerVisible) {
                return;  //if player is already visible do nothing
              }
              playerContainer.css({ 'display': 'block' });
              playerContainer.animate({ bottom: 1 }, 700, function () {
                playerVisible = true;
              });
            }, hidePlayer = function () {
              if (!playerElement.get(0).paused)
                return;
              //if the player is playing don't hide it
              playerContainer.animate({ bottom: '-100%' }, 700, function () {
                playerVisible = false;
                playerContainer.css({ 'display': 'none' });
              });
            },
            //player control functions
            play = function () {
              showPlayer();
              //show the player if hidden
              clearTimeout(hidePlayerTimeout);
              //clear the hide player timeout if set
              playerElement.find('#mpegSource').attr('src', '/assets/audio/' + $scope.audioSrc + '.mp3');
              playerElement.find('#oggSource').attr('src', '/assets/audio/' + $scope.audioSrc + '.ogg');
              playerElement.load().get(0).play();
            }, stop = function () {
              playerElement.get(0).pause();
              hidePlayerTimeout = setTimeout(hidePlayer, 1500);
            };
          //player ui controls update
          $scope.btnPlayStatus = function () {
            if (playerElement.get(0).paused) {
              return '/assets/img/site/btnPlay_audio.png';
            } else {
              return '/assets/img/site/btnPause_audio.png';
            }
          };
          $scope.togglePlay = function () {
            if (playerElement.get(0).paused) {
              play();
            } else {
              stop();
            }
          };
          $scope.volume = 0.75;
          $scope.changeVolume = function () {
            playerElement.get(0).volume = $scope.volume;
          };
          $scope.timeIndicator = '0:00';
          playerElement.bind('timeupdate', function () {
            var seconds = Math.round(this.currentTime / 60 % 1 * 60);
            if (seconds < 10)
              seconds = '0' + seconds;
            var minutes = Math.floor(this.currentTime / 3600 % 1 * 60);
            if (minutes < 10)
              minutes = '0' + minutes;
            $scope.timeIndicator = minutes + ':' + seconds;
            $scope.$apply();
          });
          //handle a play/stop requests from the $rootScope
          $scope.$on('playAudioStartRequestEvent', function (event, audioParams) {
            $scope.audioTitle = audioParams.title;
            $scope.audioSrc = audioParams.src;
            play();
          });
          $scope.$on('playAudioStopRequestEvent', stop);
          //events from the player controllers 
          playerElement.bind('pause', function () {
            audioManager.setCurrentlyPlayingAudio('');
            $rootScope.$broadcast('playAudioGlobalStopRequestEvent');
            stop();
          });
          playerElement.bind('play', function () {
            audioManager.setCurrentlyPlayingAudio($scope.audioSrc);
            //set this audio as the currently playing audio
            $rootScope.$broadcast('playAudioGlobalStartRequestEvent', { src: $scope.audioSrc });
          });
          playerElement.bind('ended', function () {
            $scope.timeIndicator = '00:00';
            $scope.$apply();
          });
        }
      ]
    };
  }
]);
angular.module('vmMusic').directive('audioSample', [
  'audioManager',
  function (audioManager) {
    'use strict';
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/directives/audioSample.html',
      scope: {
        src: '=',
        songTitle: '='
      },
      controller: [
        '$scope',
        '$rootScope',
        function ($scope, $rootScope) {
          var playStatus = {
              playing: '/assets/img/site/btnPause_audio.png',
              paused: '/assets/img/site/btnPlay_audio.png'
            }, changePlayStatus = function (status) {
              if (status === 'play') {
                $scope.btnPlay.status = playStatus.playing;
              } else {
                $scope.btnPlay.status = playStatus.paused;
              }
            };
          $scope.btnPlay = {};
          //check whether this audio is currently being played
          if (audioManager.getCurrentlyPlayingAudio() === $scope.src) {
            $scope.btnPlay.status = playStatus.playing;
          } else {
            $scope.btnPlay.status = playStatus.paused;
          }
          $scope.togglePlayPaused = function () {
            if ($scope.btnPlay.status === playStatus.paused) {
              $scope.playAudio();
            } else {
              $scope.pauseAudio();
            }
          };
          $scope.playAudio = function () {
            changePlayStatus('play');
            $rootScope.$broadcast('playAudioStartRequestEvent', {
              src: $scope.src,
              title: $scope.songTitle
            });
          };
          $scope.pauseAudio = function () {
            changePlayStatus('pause');
            $rootScope.$broadcast('playAudioStopRequestEvent');
          };
          //handle player events
          $scope.$on('playAudioGlobalStopRequestEvent', function () {
            changePlayStatus('pause');
            $scope.$apply();
          });
          $scope.$on('playAudioGlobalStartRequestEvent', function (event, audioData) {
            if (audioData.src === $scope.src) {
              changePlayStatus('play');
            } else {
              changePlayStatus('pause');
            }
            $scope.$apply();
          });
        }
      ]
    };
  }
]);
angular.module('vmMusic').directive('calendarEvent', [
  'geolocationService',
  function (geolocation) {
    'use strict';
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/directives/calendarEvent.html',
      scope: { event: '=' },
      link: function (scope) {
        geolocation.getDistance(scope.event.location).then(function (directions) {
          scope.distance = directions.distance;
          scope.duration = directions.duration;
          scope.showDuration = false;
        });
      }
    };
  }
]);
angular.module('vmMusic').directive('featureEvent', [
  'calendarData',
  function (calendarData) {
    'use strict';
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/directives/featureEvent.html',
      scope: { display: '=' },
      link: function (scope, element) {
        var displayAttemptCounter = 0, displayTimeout, container = angular.element(element), displayFeatureEvent = function () {
            if (!scope.display || scope.event === undefined)
              return;
            displayTimeout = setTimeout(function () {
              container.toggleClass('displayControl', true);
              container.animate({ opacity: 1 }, 700);
            }, 1800);
          }, hideFeatureEvent = function () {
            clearTimeout(displayTimeout);
            container.animate({ opacity: 0 }, 400, function () {
              container.toggleClass('displayControl', false);
            });
          };
        calendarData.getNextEvent().then(function (nextEvent) {
          scope.event = nextEvent;
          displayFeatureEvent();
        });
        scope.$watch('display', function () {
          //animate the display of the next event box
          if (scope.display)
            displayFeatureEvent();
          else
            hideFeatureEvent();
        });
      }
    };
  }
]);
'use strict';
angular.module('vmMusic').directive('onLoad', function () {
  return {
    restrict: 'A',
    replace: false,
    link: function (scope, element, attrs) {
      element.bind('load', function () {
        scope.$apply(scope.callback(element));
      });
    },
    scope: { callback: '=' }
  };
});
angular.module('vmMusic').directive('mapLocation', [
  'geolocationService',
  function (geolocation) {
    'use strict';
    return {
      restrict: 'A',
      replace: false,
      scope: { mapLocation: '@' },
      link: function (scope, elem) {
        geolocation.mapLocationInElement(scope.mapLocation, elem[0]);
      }
    };
  }
]);
angular.module('vmMusic').directive('navigation', function () {
  'use strict';
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/directives/navigation.html',
    scope: {},
    controller: [
      '$scope',
      '$element',
      '$location',
      function ($scope, $element, $location) {
        var subMenuContainer = angular.element($element).find('li.hasSub'), menuTitleItem = angular.element($element).find('.menuTitle'),
          //only used for phone size screens
          nonMenuTitleItems = angular.element($element).find('ul li:not(.menuTitle)'), getLeafMenuItemOn = function () {
            return angular.element($element).find('.menuItemOn:not(.hasSub)');
          };
        $scope.currentPage = function () {
          if ($location.$$path === '/') {
            return '';
          }
          return ' - ' + $location.$$path.substr(1).toUpperCase();
        };
        subMenuContainer.on('mouseleave', function () {
          subMenuContainer.toggleClass('hover', false);
        }).on('click', function () {
          subMenuContainer.toggleClass('hover');
        });
        menuTitleItem.on('click', function () {
          nonMenuTitleItems.toggleClass('menuItemOn');
          getLeafMenuItemOn().off('click').on('click', function () {
            nonMenuTitleItems.toggleClass('menuItemOn', false);
          });
        });
      }
    ]
  };
});
angular.module('vmMusic').directive('onEnter', function () {
  'use strict';
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (event) {
      if (event.which === 13) {
        scope.$apply(function () {
          scope.$eval(attrs.onEnter);
        });
        event.preventDefault();
      }
    });
  };
});
angular.module('vmMusic').directive('videoSample', function () {
  'use strict';
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/directives/videoSample.html',
    scope: {
      videoSrc: '=',
      videoTitle: '=',
      videoThumbnail: '='
    },
    controller: [
      '$scope',
      '$rootScope',
      function ($scope, $rootScope) {
        var displayVideoContainer = function () {
            //if element already exist - just change the video playing
            if ($('#videoPlayerContainer').length > 0) {
              $('#videoPlayerContainer iframe').attr('src', $scope.videoSrc);
              return;
            }
            var videoContainer = $('<div id=\'videoPlayerContainer\'></div>');
            var controlFrame = $('<div class=\'closeOverlay\'><a class=\'closeButton\'>close<img src=\'/assets/img/site/btnPopupClose.png\'/></a></div>');
            var videoFrame = $('<iframe width=\'' + window.innerWidth * 0.8 + '\' height=\'' + window.innerHeight * 0.8 + '\' src=\'' + $scope.videoSrc + '\' frameborder=\'0\' allowfullscreen></iframe>');
            videoContainer.append(controlFrame);
            videoContainer.append(videoFrame);
            $('body').append(videoContainer);
            videoContainer.animate({ top: '10%' }, 700);
            //bind the close videoContainer events
            $('#videoPlayerContainer .closeButton').on('click', hideVideoContainer);
            $('#videoPlayerContainer').on('click', function (e) {
              e.stopPropagation();
            });
            $('html').on('click', hideVideoContainer);
            $(document).keyup(function (e) {
              //bind escape key
              if (e.which == 27)
                hideVideoContainer();
            });
          }, hideVideoContainer = function () {
            $('#videoPlayerContainer').animate({ top: '100%' }, 700, function () {
              $('#videoPlayerContainer').remove();
            });
            //remove the event bindings
            $('#videoPlayerContainer .closeButton').off('click', hideVideoContainer);
          };
        $scope.playVideo = function () {
          $rootScope.$broadcast('playAudioStopRequestEvent');
          //stop audio if playing
          displayVideoContainer();
        };
        //respond to a audioplay request
        $rootScope.$on('playAudioGlobalStartRequestEvent', hideVideoContainer);
        //add a binding to stop the propagation of click on video links
        $('.videoLink').on('click', function (e) {
          e.stopPropagation();
        });
      }
    ]
  };
});
'use strict';
angular.module('vmMusic').filter('timeZone', function () {
  return function (val, offset) {
    if (val != null && val.length > 16) {
      return val.substring(0, 16);
    }
    return val;
  };
});
'use strict';
angular.module('vmMusic').filter('toTrusted', [
  '$sce',
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/directives/audioPlayer.html', '<div id="audioPlayerContainer">\n\t<div class="playerDetails">\n\t\t<img class="btnplay" data-ng-src="{{ btnPlayStatus() }}" data-ng-click="togglePlay()">\n\t\t<div class="songInfo">\n\t\t\t{{ audioTitle }}<br>\n\t\t\t{{ timeIndicator }}\t\t\n\t\t</div>\n\t\t<div class="volumecontroll">\n\t\t\t- volume +<br>\n\t\t\t<input type="range" name="volume" min="0" max="1" step="0.05" data-ng-model="volume" data-ng-change="changeVolume()">\n\t\t</div>\n\t\t\t\n\t\t<audio id="audioPlayer" preload="auto">\n\t        \t        <source id="oggSource" src="" type="audio/ogg"><source id="mpegSource" src="" type="audio/mpeg">\n\n\t        Your browser cannot play this audio.\n\t    </audio>\n\t</div>\n</div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/directives/audioSample.html', '<div rel="{{ src }}" class="audioSample">\n\t<img style="cursor: pointer;" on-enter="togglePlayPaused()" alt="play {{ songTitle }}" tabindex="0" data-ng-src="{{ btnPlay.status }}" data-ng-click="togglePlayPaused()">\n\t<div data-ng-transclude=""> </div>\n</div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/components/bio.html', '<div class="pageHeader"><img alt="{{ bio.title }}" data-ng-src="{{ bio.img }}"></div>\n<h1>Biography</h1>\n<div data-ng-bind-html="bio.biography"></div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/components/calendar.html', '<h1 data-ng-if="upcomingEvents.length > 0">Upcoming Events</h1>\n<div class="event itemBackground" data-ng-repeat="event in upcomingEvents | orderBy: upcommingEventOrderPredicate">\n\t<calendar-event event="event"></calendar-event>\n</div>\n\n<h1 data-ng-show="upcomingEvents.length < 3">Recent Events</h1>\n<div class="event itemBackground" data-ng-show="upcomingEvents.length < 3" data-ng-repeat="event in recentEvents | orderBy: recentEventOrderPredicate | limitTo: 3">\n\t<calendar-event event="event"></calendar-event>\n</div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/directives/calendarEvent.html', '<div class="eventDetails">\n\t<div map-location="{{event.location}}" class="eventMap"></div>\n\t<div class="itemTitle">{{ event.title }}\n\t\t<span class="distanceToEvent" data-ng-if="distance" data-ng-click="showDuration = !showDuration">\n\t\t\t<span data-ng-hide="showDuration"> ({{distance}} away)</span>\n\t\t\t<span data-ng-show="showDuration"> ({{duration}} away)</span>\n\t\t</span>\n\t</div>\n    <div class="eventTime">{{ \n    \tevent.startTime | timeZone | date: \'EEEE, MMMM dd, yyyy - h:mm a\' \n    }}</div>\n\t<div class="eventLocation">Location: <a href="http://maps.google.com/?q={{ event.location }}" target="_blank">{{ event.location }}</a></div>\n\t<div class="info"><strong>More Info: </strong><span data-ng-bind-html="event.description | toTrusted"></span></div>\n</div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/components/contact.html', '<div class="pageHeader"><img src="assets/img/misc/accordion.png" title="Accordion - Siwa and Figli" alt="Siwa and Figli Super Quatro" /></div>\n<h1>Contact</h1>\n\n<p>For general information and booking please contact:</p>\n<p>Phone: <a href="tel: {{contact.phone}}" title="Call Vladimir">{{ contact.phone }}</a></p>\n<p>Email: <a href="mailto:{{ contact.email }}" title="Email Vladimir">{{ contact.email }}</a></p>\n<p class="hideOnSmall">You can also use this widget to send Vladimir a voice message by clicking on the icon below and entering your name and phone number.  Your phone will ring and you will be able to leave Vladimir a message after answering.</p>\n<object class="hideOnSmall" type="application/x-shockwave-flash" data="https://clients4.google.com/voice/embed/webCallButton" width="230" height="85"><param name="movie" value="https://clients4.google.com/voice/embed/webCallButton" /><param name="wmode" value="transparent" /><param name="FlashVars" value="id=704396e5c99917296cead14873ae1fb2b1f65987&style=0" /></object>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/directives/featureEvent.html', '<div id=\'hEvent\'>\n\t<h3>Upcoming</h3>\n    <p class="hevent_title">{{ event.title  }}</p>\n    <p><a href="http://maps.google.com/?q={{ event.location }}" target="_blank">{{ event.location }}</a></p>\n    <p>{{ event.startTime | timeZone | date: \'EEEE, MMMM dd, yyyy - h:mm a\' }}</p>\n    <p>For more upcoming performances visit <a href="/calendar">calendar</a>.</p>\n</div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/components/home.html', '<div class="home_left">\n    <div id="h_welcome">\n    \t<h2>Welcome</h2>\n        <welcome data-ng-bind-html="welcomeMessage"></welcome>\n    </div>\n    <div id="h_news">\n        <h2>News</h2>\n        <p data-ng-repeat="newsItem in news | orderBy: newsOrderPredicate" data-ng-bind-html="newsItem.description"></p>\n    </div>\n</div>\n<div class="home_right"> \n    <h2>Features</h2>\n    <div class="h_videoFeature">\n\t    <div class="video" data-ng-repeat="video in videoFeatures | orderBy: featuresOrderPredicate">\n\t    \t<video-sample video-src="video.src" video-title="video.title" video-thumbnail="video.img"></video-sample>\n\t        <span data-ng-bind-html="video.title"></span>                    \n\t    </div>\n\t</div>\n    <div class="h_audioFeature">\n        <div class="audioFeature" data-ng-repeat="audio in audioFeatures | orderBy: featuresOrderPredicate">\n        \t<audio-sample src="audio.src" song-title="audio.title">{{ audio.title }}</audio-sample>\n        \t<p data-ng-bind-html="audio.description"></p>\n        </div>\n    </div>\n</div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/directives/navigation.html', '<nav>\n\t<ul>\n\t\t<li class="menuTitle"><a href="#" title="Menu">MENU{{currentPage()}}</a></li>\n\t\t<li><a href="/" title="Home Page">HOME</a></li>\n\t    <li><a href="/biography" title="Biography">BIOGRAPHY</a></li>\n\t\t<li><a href="/calendar" title="Upcoming Events">CALENDAR</a></li>\n\t\t<li><a href="/recordings" title="Recordings">RECORDINGS</a>\n\t\t<li class="hasSub">\n\t        \t<a href="#" title="Gallery">GALLERY</a>\n\t        \t<ul>\t\n\t            \t\t<li rel="PHOTOS"><a href="/photos" title="Photo Gallery">PHOTOS</a></li>\n\t            \t\t<li rel="VIDEOS"><a href="/videos" title="Video Gallery">YOUTUBE FEED</a></li>\n\t        \t</ul>\n\t    \t</li>\n\t\t<li><a href="/contact" title="Contact Information">CONTACT</a></li>\n\t</ul>\n</nav>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/components/photos.html', '<div class="galleryContainer">\n\t<div class="slider">\n\t    <div class="slide">\n\t    \t<div class="slideImg">\n\t\t    \t<a href="{{ photo.source.original }}" target="_blank" title="Click for Full Size">\n\t\t    \t\t<img title="Click for Full Size - {{photo.title}}" alt="{{photo.title}}" data-ng-swipe-right="showPrev()" data-ng-swipe-left="showNext()" data-ng-src="{{photo.source.medium}}">\n\t\t    \t</a>\n\t\t\t\t<div class="slideCaption"><span>{{photo.title}}</span></div>\n\t\t\t</div>\n\t    </div>\n\t\n\t    <a class="arrow prev" href="#" data-ng-click="showPrev()"></a>\n\t    <a class="arrow next" href="#" data-ng-click="showNext()"></a>\n\t</div>\n\t\n    <div class="thumbs">\n    \t<label class="counter">{{ imageCounter() }}</label>\n    \t<div class="thumbsViewScrollBack" data-ng-click="thumbViewPrevious()"></div>\n\t    <div class="thumbSlider">\n\t\t    <ul class="nav" data-ng-style="getThumbsWidth()" data-ng-swipe-left="thumbViewSwipeAdvance(true)" data-ng-swipe-right="thumbViewSwipeAdvance(false)">\n\t\t        <li data-ng-repeat="photo in photos" data-ng-class="{\'active\':isActive($index)}">\n\t\t            <img alt="" title="{{photo.title}}" on-load="" callback="updateThumbViewWidth" data-ng-src="{{photo.source.thumbnail}}" data-ng-click="showPhoto($index);">\n\t\t        </li>\n\t\t    </ul>\n\t    </div>\n\t    <div class="thumbsViewScrollForward" data-ng-click="thumbViewNext()"></div>\n\t</div>\n</div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/components/recordings.html', '<div class="itemBackground" data-ng-repeat="album in recordings | orderBy: recordingsOrderPredicate">\n\t<div class="album">\n\t\t<div class="albumImage"><img alt="{{ album.title }}" data-ng-src="{{ album.img }}"></div>\n\t\t<div class="albumDesc">\n\t\t\t<p class="title">{{ album.title }}</p>\n\t\t\t<p>{{ album.description }}</p>\n\t\t</div>\n\t\t<div class="albumSamples" data-ng-show="album.samples.length > 0">\n\t\t\t<audio-sample src="sample.src" song-title="sample.title" data-ng-repeat="sample in album.samples | orderBy: recordingsOrderPredicate">{{ sample.title }}</audio-sample>\n\t\t</div>\n\t\t<div class="storeLinks">\n\t\t\t<div class="buynow" data-ng-show="album.storeLinks.length > 0">BUY NOW!</div>\n\t\t\t<a href="{{ store.href }}" rel="{{ store.storeCode }}" target="_blank" data-ng-repeat="store in album.storeLinks | orderBy: \'storeName\'">{{ store.storeName }}</a>\n\t\t</div>\n\t</div>\t\n</div>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/directives/videoSample.html', '<a on-enter="playVideo()" title="Play {{ videoTitle }}" class="videoLink" tabindex="0" data-ng-click="playVideo()">\n\t<div class="btnPlay"><img src="/assets/img/site/btnPlay.png" alt="Play {{ videoTitle }}"></div>\n\t<img title="{{ videoTitle }}" alt="Play {{ videoTitle }}" data-ng-src="{{ videoThumbnail }}">\n</a>');
  }
]);
angular.module('vmMusic').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('/components/videos.html', '<h1>YouTube Feed</h1>\n<div class="video itemBackground" data-ng-repeat="video in allVideos">\n\t<video-sample video-src="video.embedUrl" video-title="video.title" video-thumbnail="video.thumbnail"></video-sample>\n    <div class="videoDetails">\n        <div class="itemTitle">{{ video.title }}</div>\n        <div class="info">{{ video.description }}</div>\n    </div>\n</div>\n');
  }
]);