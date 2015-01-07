var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-38398614-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),angular.module("vmMusic",["ngRoute","ngResource","ngSanitize","ngAnimate","ngTouch"]).config(["$routeProvider","$locationProvider",function(e,t){e.when("/",{templateUrl:"/components/home.html",controller:"homeCtrl"}),e.when("/biography",{templateUrl:"/components/bio.html",controller:"bioCtrl"}),e.when("/calendar",{templateUrl:"/components/calendar.html",controller:"calendarCtrl"}),e.when("/recordings",{templateUrl:"/components/recordings.html",controller:"recordingsCtrl"}),e.when("/photos",{templateUrl:"/components/photos.html",controller:"photosCtrl"}),e.when("/videos",{templateUrl:"/components/videos.html",controller:"videosCtrl"}),e.when("/contact",{templateUrl:"/components/contact.html",controller:"contactCtrl"}),t.html5Mode(!0).hashPrefix("!")}]).constant("gCalUrl","https://www.googleapis.com/calendar/v3/calendars/5s80mf8pl7rtkj9bpasndqqe58%40group.calendar.google.com/events?maxResults=30&orderBy=startTime&singleEvents=true&key=AIzaSyDRrUkiIxPAi_OtunVrHRhvikL7d83cQsI"),angular.module("vmMusic").factory("audioManager",function(){var e;return{getCurrentlyPlayingAudio:function(){return e},setCurrentlyPlayingAudio:function(t){e=t}}}),angular.module("vmMusic").factory("calendarData",["$http","$q","gCalUrl",function(e,t,n){function o(e,t){for(var n=[],o=0;o<e.length;o++){var a=i(e[o]),r=new Date(a.startTime);(r>new Date&&t||r<new Date&&!t)&&n.push(a)}return n}function i(e){return{title:e.summary,startTime:e.start.dateTime,location:e.location,description:e.description}}var a=t.defer();e({method:"GET",url:n}).success(function(e){a.resolve(e.items)}).error(function(e){console.log("An error occured while getting calendar events. "+e)});var r=a.promise.then(function(e){return o(e,!0)}),l=a.promise.then(function(e){return o(e,!1)}),c=a.promise.then(function(e){for(var t,n=0;n<e.length;n++){var o=i(e[n]),a=new Date(o.startTime);a>new Date&&(void 0==t||a<new Date(t.startTime))&&(t=o)}return t});return{getUpcomingEvents:function(){return r},getRecentEvents:function(){return l},getNextEvent:function(){return c}}}]),angular.module("vmMusic").factory("contactData",["$resource",function(e){var t=e("/data/about.json");return{getContactData:function(){return t.get()}}}]),angular.module("vmMusic").factory("featureData",["$http","$q",function(e,t){return{getFeatures:function(){var n=t.defer();return e({method:"GET",url:"/data/features.json"}).success(function(e){n.resolve(e)}),n.promise}}}]),angular.module("vmMusic").factory("newsData",["$resource",function(e){var t=e("/data/news.json");return{getAllNewsItems:function(){return t.query()}}}]),angular.module("vmMusic").factory("photosData",["$http","$q",function(e){function t(e){return"https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key="+i+"&photo_id="+e+"&format=json&nojsoncallback=1"}function n(e){for(var t=e.data.photoset.photo,n=0;n<t.length;n++)o(t[n]);return t}function o(n){e({method:"GET",url:t(n.id)}).then(function(e){n.source=function(e){for(var t={},n=0;n<e.length;n++)"Square"==e[n].label&&(t.thumbnail=e[n].source),"Medium"==e[n].label&&(t.medium=e[n].source),"Original"==e[n].label&&(t.original=e[n].source);return t}(e.data.sizes.size)})}var i="48dad8a586fe5931b1db3c1026e0564b",a="https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+i+"&photoset_id=72157645114741942&extras=date_upload&format=json&nojsoncallback=1",r=e({method:"GET",url:a}).then(n);return{getAllImages:function(){return r}}}]),angular.module("vmMusic").factory("recordingsData",["$http","$q",function(e,t){return{getAllRecordings:function(){var n=t.defer();return e({method:"GET",url:"/data/recordings.json"}).success(function(e){n.resolve(e)}),n.promise}}}]),angular.module("vmMusic").factory("videosData",["$http","$q",function(e,t){function n(e){for(var t=0;t<s.length;t++)if(e.indexOf(s[t])>-1)return!0;return!1}function o(e){var t=e.media$group.media$content[0].url;return t.replace(/\/v\//,"/embed/")+"&autoplay=1"}function i(e){return e.media$group.media$title.$t}function a(e){return e.media$group.media$thumbnail[1].url}function r(e){return e.media$group.media$description.$t}var l="Vladimir Mollov",c=18,s=["iUL7wOzp698","FDFBDw97Epg","tbQHOigF8WA","WuZE2vidsIM","U9Tb3HWkJRE"];c+=s.length;var l=l.replace(/ +/,"/"),u="http://gdata.youtube.com/feeds/api/videos/-/"+l+"?max-results="+c+"&alt=json&orderby=published";return{getYouTubeVideos:function(){var n=t.defer();return e({method:"GET",url:u}).success(function(e){n.resolve(e)}),n.promise},sanitizeYouTubeVideos:function(e){for(var t=0;t<e.length;t++)n(e[t].id.$t)&&e.splice(t,1);for(var l=[],t=0;t<e.length;t++)l.push({embedUrl:o(e[t]),title:i(e[t]),thumbnail:a(e[t]),description:r(e[t])});return l}}}]),angular.module("vmMusic").factory("welcomeData",["$http","$q",function(e,t){var n=t.defer();return{getWelcomeMessage:function(){return e({method:"GET",url:"data/welcome.json"}).success(function(e){n.resolve(e)}),n.promise}}}]),angular.module("vmMusic").controller("bioCtrl",["$scope","$resource",function(e,t){e.bio=t("/data/bio.json").get()}]),angular.module("vmMusic").controller("calendarCtrl",["$scope","calendarData",function(e,t){t.getUpcomingEvents().then(function(t){e.upcomingEvents=t,e.upcommingEventOrderPredicate="startTime"},function(e){console.log("error retrieving upcoming events: "+e)}),t.getRecentEvents().then(function(t){e.recentEvents=t,e.recentEventOrderPredicate="-startTime"},function(e){console.log("error retrieving recent events: "+e)})}]),angular.module("vmMusic").controller("contactCtrl",["$scope","contactData",function(e,t){e.contact=t.getContactData()}]),angular.module("vmMusic").controller("footerCtrl",["$scope","contactData",function(e,t){e.about=t.getContactData()}]),angular.module("vmMusic").controller("headerCtrl",["$scope","$location",function(e,t){function n(){return"/"==t.$$path}function o(e,t,n){e.animate({opacity:0},200,function(){n.animate({height:t.height()},300,function(){t.css("display","inline"),t.animate({opacity:1}),e.css("display","none")})})}e.$watch(function(){return t.$$path},function(){n()?o($(".regularBanner"),$(".homeBanner"),$(".banner")):o($(".homeBanner"),$(".regularBanner"),$(".banner"))}),$(window).resize(function(){$(".banner").height(n()?$(".homeBanner").height():$(".regularBanner").height())}),e.displayFeatureEvent=n}]),angular.module("vmMusic").controller("homeCtrl",["$scope","$sce","welcomeData","newsData","featureData",function(e,t,n,o,i){n.getWelcomeMessage().then(function(n){e.welcomeMessage=t.trustAsHtml(n.welcome)},function(e){console.log("error fetching welcome message: "+e)}),e.news=o.getAllNewsItems(),e.newsOrderPredicate="-id",i.getFeatures().then(function(t){e.videoFeatures=t.video,e.audioFeatures=t.audio,e.featuresOrderPredicate="order"},function(e){console.log("error fetching features: "+e)})}]),angular.module("vmMusic").controller("photosCtrl",["$scope","photosData",function(e,t){function n(){var e=function(){for(var e=0,t=$("ul.nav>li>img"),n=0;r>n;n++)e+=t[n].width+10;return e}();$(".thumbSlider .nav").animate({marginLeft:-e},400)}function o(){return{low:Math.floor(.25*i())+1,high:Math.floor(.75*i())-1}}function i(){var t=a/e.photos.length;return $(".thumbSlider").width()/t}e.photos=[],t.getAllImages().then(function(t){e.photos[0]=t[0];for(var n=1;n<t.length;n++){for(var o=!1,i=0;i<e.photos.length;i++)if(t[n].dateupload>=e.photos[i].dateupload){e.photos.splice(i,0,t[n]),o=!0;break}o||e.photos.push(t[n])}e.photo=e.photos[0]});var a=0,r=0,l=0;e.getThumbsWidth=function(){return{width:a+"px"}},e.updateThumbViewWidth=function(e){a+=e.width()+15},e.isActive=function(e){return l===e},e.updateSlideCaptionWidth=function(){},e.showPrev=function(){var t=l>0?l-1:e.photos.length-1;e.showPhoto(t)},e.showNext=function(){var t=l<e.photos.length-1?l+1:0;e.showPhoto(t)},e.showPhoto=function(t){for(l=t,e.photo=e.photos[t],t==e.photos.length-1&&(r=t-o().high);r<t-o().high&&t<e.photos.length-1;)r++;for(;r>t-o().low&&r>0;)r--;n()},e.imageCounter=function(){return l+1+"/"+e.photos.length},e.thumbViewNext=function(){return r>e.photos.length-o().high?void(r=e.photos.length-o().high):(r+=2,void n())},e.thumbViewPrevious=function(){0!=r&&(r-=2,n())},$(document).keydown(function(t){37==t.keyCode&&e.showPrev(),39==t.keyCode&&e.showNext(),e.$apply()}),e.thumbViewSwipeAdvance=function(t){t?r++:r--,t?e.thumbViewNext():e.thumbViewPrevious()}}]),angular.module("vmMusic").controller("recordingsCtrl",["$scope","recordingsData",function(e,t){t.getAllRecordings().then(function(t){e.recordings=t,e.recordingsOrderPredicate="order"})}]),angular.module("vmMusic").controller("videosCtrl",["$scope","videosData",function(e,t){t.getYouTubeVideos().then(function(n){e.allVideos=t.sanitizeYouTubeVideos(n.feed.entry)},function(e){console.log("error fetching videos: "+e)})}]),angular.module("vmMusic").directive("audioPlayer",["audioManager",function(e){return{restrict:"E",replace:!0,templateUrl:"/directives/audioPlayer.html",scope:{},controller:["$scope","$rootScope",function(t,n){function o(){a(),clearTimeout(l),$("#mpegSource").attr("src","/assets/audio/"+t.audioSrc+".mp3"),$("#oggSource").attr("src","/assets/audio/"+t.audioSrc+".ogg"),s.load().get(0).play()}function i(){s.get(0).pause(),l=setTimeout(r,1500)}function a(){u||(c.css({display:"block"}),c.animate({bottom:1},700,function(){u=!0}))}function r(){s.get(0).paused&&c.animate({bottom:"-100%"},700,function(){u=!1,c.css({display:"none"})})}var l,c=$("#audioPlayerContainer"),s=$("#audioPlayer"),u=!1;t.btnPlayStatus=function(){return s.get(0).paused?"/assets/img/site/btnPlay_audio.png":"/assets/img/site/btnPause_audio.png"},t.togglePlay=function(){s.get(0).paused?o():i()},t.volume=.75,t.changeVolume=function(){s.get(0).volume=t.volume},t.timeIndicator="0:00",s.bind("timeupdate",function(){var e=Math.round(this.currentTime/60%1*60);10>e&&(e="0"+e);var n=Math.floor(this.currentTime/3600%1*60);10>n&&(n="0"+n),t.timeIndicator=n+":"+e,t.$apply()}),t.$on("playAudioStartRequestEvent",function(e,n){t.audioTitle=n.title,t.audioSrc=n.src,o()}),t.$on("playAudioStopRequestEvent",i),s.bind("pause",function(){e.setCurrentlyPlayingAudio(""),n.$broadcast("playAudioGlobalStopRequestEvent"),i()}),s.bind("play",function(){e.setCurrentlyPlayingAudio(t.audioSrc),n.$broadcast("playAudioGlobalStartRequestEvent",{src:t.audioSrc})}),s.bind("ended",function(){t.timeIndicator="00:00",t.$apply()})}]}}]),angular.module("vmMusic").directive("audioSample",["audioManager",function(e){return{restrict:"E",replace:!0,transclude:!0,templateUrl:"/directives/audioSample.html",scope:{src:"=",songTitle:"="},controller:["$scope","$rootScope",function(t,n){function o(e){t.btnPlay.status="play"==e?i.playing:i.paused}var i={playing:"/assets/img/site/btnPause_audio.png",paused:"/assets/img/site/btnPlay_audio.png"};t.btnPlay={},t.btnPlay.status=e.getCurrentlyPlayingAudio()==t.src?i.playing:i.paused,t.togglePlayPaused=function(){t.btnPlay.status==i.paused?t.playAudio():t.pauseAudio()},t.playAudio=function(){o("play"),n.$broadcast("playAudioStartRequestEvent",{src:t.src,title:t.songTitle})},t.pauseAudio=function(){o("pause"),n.$broadcast("playAudioStopRequestEvent")},t.$on("playAudioGlobalStopRequestEvent",function(){o("pause"),t.$apply()}),t.$on("playAudioGlobalStartRequestEvent",function(e,n){o(n.src==t.src?"play":"pause"),t.$apply()})}]}}]),angular.module("vmMusic").directive("calendarEvent",function(){return{restrict:"E",replace:!0,templateUrl:"/directives/calendarEvent.html",scope:{event:"="}}}),angular.module("vmMusic").directive("featureEvent",["calendarData",function(e){return{restrict:"E",replace:!0,templateUrl:"/directives/featureEvent.html",scope:{display:"="},controller:["$scope",function(t){function n(){return t.display?void 0==t.event?void(30>a&&setTimeout(n,500)):void(i=setTimeout(function(){$("#hEvent").toggleClass("displayControl",!0),$("#hEvent").animate({opacity:1},700)},1800)):void 0}function o(){clearTimeout(i),$("#hEvent").animate({opacity:0},400,function(){$("#hEvent").toggleClass("displayControl",!1)})}e.getNextEvent().then(function(e){t.event=e}),t.$watch("display",function(){t.display?n():o()});var i,a=0}]}}]),angular.module("vmMusic").directive("onLoad",function(){return{restrict:"A",replace:!1,link:function(e,t){t.bind("load",function(){e.$apply(e.callback(t))})},scope:{callback:"="}}}),angular.module("vmMusic").directive("navigation",function(){return{restrict:"E",replace:!0,templateUrl:"/directives/navigation.html",scope:{},controller:["$scope","$location",function(e,t){e.currentPage=function(){return"/"==t.$$path?"":" - "+t.$$path.substr(1).toUpperCase()},$("li.hasSub").on("mouseleave",function(){$("li.hasSub").toggleClass("hover",!1)}),$("#close").on("touchstart",function(){$("li.hasSub").off("mouseover")}),$("li.hasSub").on("click",function(){$("li.hasSub").toggleClass("hover")}),$(".menuTitle").on("click",function(){$("nav > ul li:not(.menuTitle)").toggleClass("menuItemOn"),$(".menuItemOn:not(.hasSub)").off("click"),$(".menuItemOn:not(.hasSub)").on("click",function(){$("nav > ul li:not(.menuTitle)").toggleClass("menuItemOn",!1)})})}]}}),angular.module("vmMusic").directive("videoSample",function(){return{restrict:"E",replace:!0,templateUrl:"/directives/videoSample.html",scope:{videoSrc:"=",videoTitle:"=",videoThumbnail:"="},controller:["$scope","$rootScope",function(e,t){function n(){if($("#videoPlayerContainer").length>0)return void $("#videoPlayerContainer iframe").attr("src",e.videoSrc);var t=$("<div id='videoPlayerContainer'></div>"),n=$("<div class='closeOverlay'><a href='#' class='closeButton'>close<img src='/assets/img/site/btnPopupClose.png'/></a></div>"),i=$("<iframe width='"+.8*window.innerWidth+"' height='"+.8*window.innerHeight+"' src='"+e.videoSrc+"' frameborder='0' allowfullscreen></iframe>");t.append(n),t.append(i),$("body").append(t),t.animate({top:"10%"},700),$("#videoPlayerContainer .closeButton").on("click",o),$("#videoPlayerContainer").on("click",function(e){e.stopPropagation()}),$("html").on("click",o),$(document).keyup(function(e){27==e.which&&o()})}function o(){$("#videoPlayerContainer").animate({top:"100%"},700,function(){$("#videoPlayerContainer").remove()}),$("#videoPlayerContainer .closeButton").off("click",o)}e.playVideo=function(){t.$broadcast("playAudioStopRequestEvent"),n()},t.$on("playAudioGlobalStartRequestEvent",o),$(".videoLink").on("click",function(e){e.stopPropagation()})}]}}),angular.module("vmMusic").filter("timeZone",function(){return function(e){return null!=e&&e.length>16?e.substring(0,16):e}}),angular.module("vmMusic").filter("toTrusted",["$sce",function(e){return function(t){return e.trustAsHtml(t)}}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/directives/audioPlayer.html",'<div id="audioPlayerContainer">\n	<div class="playerDetails">\n		<img ng-src="{{ btnPlayStatus() }}" class="btnplay" ng-click="togglePlay()" />\n		<div class="songInfo">\n			{{ audioTitle }}<br />\n			{{ timeIndicator }}		\n		</div>\n		<div class="volumecontroll">\n			- volume +<br />\n			<input type="range" name="volue" min="0" max="1" step="0.05" ng-model="volume" ng-change="changeVolume()" />\n		</div>\n			\n		<audio id="audioPlayer" preload="auto">\n	        	        <source id=\'oggSource\' src=\'\' type=\'audio/ogg\' /><source id=\'mpegSource\' src=\'\' type=\'audio/mpeg\' />\n\n	        Your browser cannot play this audio.\n	    </audio>\n	</div>\n</div>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/directives/audioSample.html",'<div rel="{{ src }}" class="audioSample">\n	<img ng-src="{{ btnPlay.status }}" style="cursor: pointer;" ng-click="togglePlayPaused()" alt="play {{ songTitle }}">\n	<div ng-transclude> </div>\n</div>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/components/bio.html",'<div class="pageHeader"><img ng-src="{{ bio.img }}" alt="{{ bio.title }}" /></div>\n<h1>Biography</h1>\n<div ng-bind-html="bio.biography"></div>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/components/calendar.html","<h1 ng-show=\"upcomingEvents.length > 0\">Upcoming Events</h1>\n<div class='event itemBackground' ng-repeat='event in upcomingEvents | orderBy: upcommingEventOrderPredicate'>\n	<calendar-event event='event'></calendar-event>\n</div>\n\n<h1 ng-show=\"upcomingEvents.length < 3\">Recent Events</h1>\n<div class='event itemBackground' ng-show=\"upcomingEvents.length < 3\" ng-repeat='event in recentEvents | orderBy: recentEventOrderPredicate | limitTo: 3'>\n	<calendar-event event='event'></calendar-event>\n</div>")}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/directives/calendarEvent.html","<div class='eventDetails'>\n	<div class='itemTitle'>{{ event.title }}</div>\n    <div class='eventTime'>{{ \n    	event.startTime | timeZone | date: 'EEEE, MMMM dd, yyyy - h:mm a' \n    }}</div>\n	<div class='eventLocation'>Location: <a href=\"http://mapof.it/{{ event.location }}\" target=\"_blank\">{{ event.location }}</a></div>\n	<div class='info'><strong>More Info: </strong><span ng-bind-html=\"event.description | toTrusted\"></span></div>\n</div>")}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/components/contact.html",'<div class="pageHeader"><img src="assets/img/misc/accordion.png" title="Accordion - Siwa and Figli" alt="Siwa and Figli Super Quatro" /></div>\n<h1>Contact</h1>\n\n<p>For general information and booking please contact:</p>\n<p>Phone: {{ contact.phone }}</p>\n<p>Email: <a href="mailto:{{ contact.email }}" title="Email Vladimir">{{ contact.email }}</a></p>\n<p class="hideOnSmall">You can also use this widget to send Vladimir a voice message by clicking on the icon below and entering your name and phone number.  Your phone will ring and you will be able to leave Vladimir a message after answering.</p>\n<object class="hideOnSmall" type="application/x-shockwave-flash" data="https://clients4.google.com/voice/embed/webCallButton" width="230" height="85"><param name="movie" value="https://clients4.google.com/voice/embed/webCallButton" /><param name="wmode" value="transparent" /><param name="FlashVars" value="id=704396e5c99917296cead14873ae1fb2b1f65987&style=0" /></object>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/directives/featureEvent.html",'<div id=\'hEvent\'>\n	<h3>Upcoming</h3>\n    <p class="hevent_title">{{ event.title  }}</p>\n    <p><a href="http://mapof.it/{{ event.location }}" target="_blank">{{ event.location }}</a></p>\n    <p>{{ event.startTime | timeZone | date: \'EEEE, MMMM dd, yyyy - h:mm a\' }}</p>\n    <p>For more upcoming performances visit <a href="/calendar">calendar</a>.</p>\n</div>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/components/home.html",'<div class="home_left">\n    <div id="h_welcome">\n    	<h2>Welcome</h2>\n        <welcome ng-bind-html="welcomeMessage" />\n    </div>\n    <div id="h_news">\n        <h2>News</h2>\n        <p ng-repeat="newsItem in news | orderBy: newsOrderPredicate" ng-bind-html="newsItem.description"></p>\n    </div>\n</div>\n<div class="home_right"> \n    <h2>Features</h2>\n    <div class="h_videoFeature">\n	    <div class="video" ng-repeat="video in videoFeatures | orderBy: featuresOrderPredicate">\n	    	<video-sample video-src="video.src" video-title="video.title" video-thumbnail="video.img"></video-sample>\n	        <span ng-bind-html="video.title"></span>                    \n	    </div>\n	</div>\n    <div class="h_audioFeature">\n        <div class="audioFeature" ng-repeat="audio in audioFeatures | orderBy: featuresOrderPredicate">\n        	<audio-sample src="audio.src" song-title="audio.title">{{ audio.title }}</audio-sample>\n        	<p ng-bind-html="audio.description"></p>\n        </div>\n    </div>\n</div>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/directives/navigation.html",'<nav>\n	<ul>\n		<li class="menuTitle"><a href="#" title="Menu">MENU{{currentPage()}}</a></li>\n		<li><a href="/" title="Home Page">HOME</a></li>\n	    <li><a href="/biography" title="Biography">BIOGRAPHY</a></li>\n		<li><a href="/calendar" title="Upcoming Events">CALENDAR</a></li>\n		<li><a href="/recordings" title="Recordings">RECORDINGS</a>\n		<li class="hasSub">\n	        	<a href="#" title="Gallery">GALLERY</a>\n	        	<ul>	\n	            		<li rel="PHOTOS"><a href="/photos" title="Photo Gallery">PHOTOS</a></li>\n	            		<li rel="VIDEOS"><a href="/videos" title="Video Gallery">VIDEOS</a></li>\n	        	</ul>\n	    	</li>\n		<li><a href="/contact" title="Contact Information">CONTACT</a></li>\n	</ul>\n</nav>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/components/photos.html",'<div class="galleryContainer">\n	<div class="slider">\n	    <div class="slide">\n	    	<div class="slideImg">\n		    	<a href="{{ photo.source.original }}" target="_blank" title="Click for Full Size">\n		    		<img ng-swipe-right="showPrev()" ng-swipe-left="showNext()" ng-src="{{photo.source.medium}}" title="Click for Full Size - {{photo.title}}" alt="{{photo.title}}" on-load callback="updateSlideCaptionWidth" />\n		    	</a>\n				<div class="slideCaption"><span>{{photo.title}}</span></div>\n			</div>\n	    </div>\n	\n	    <a class="arrow prev" href="#" ng-click="showPrev()"></a>\n	    <a class="arrow next" href="#" ng-click="showNext()"></a>\n	</div>\n	\n    <div class="thumbs">\n    	<label class="counter">{{ imageCounter() }}</label>\n    	<div class="thumbsViewScrollBack" ng-click="thumbViewPrevious()"></div>\n	    <div class="thumbSlider">\n		    <ul class="nav" ng-style="getThumbsWidth()" ng-swipe-left="thumbViewSwipeAdvance(true)" ng-swipe-right="thumbViewSwipeAdvance(false)">\n		        <li ng-repeat="photo in photos" ng-class="{\'active\':isActive($index)}">\n		            <img ng-src="{{photo.source.thumbnail}}" alt="" title="{{photo.title}}" ng-click="showPhoto($index);" on-load callback="updateThumbViewWidth" />\n		        </li>\n		    </ul>\n	    </div>\n	    <div class="thumbsViewScrollForward" ng-click="thumbViewNext()"></div>\n	</div>\n</div>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/components/recordings.html",'<div class="itemBackground" ng-repeat="album in recordings | orderBy: recordingsOrderPredicate">\n	<div class="album">\n		<div class="albumImage"><img ng-src="{{ album.img }}" alt="{{ album.title }}" /></div>\n		<div class="albumDesc">\n			<p class="title">{{ album.title }}</p>\n			<p>{{ album.description }}</p>\n		</div>\n		<div class="albumSamples" ng-show="album.samples.length > 0">\n			<audio-sample ng-repeat="sample in album.samples | orderBy: recordingsOrderPredicate" src="sample.src" song-title="sample.title">{{ sample.title }}</audio-sample>\n		</div>\n		<div class="storeLinks">\n			<div class=\'buynow\' ng-show="album.storeLinks.length > 0">BUY NOW!</div>\n			<a ng-repeat="store in album.storeLinks | orderBy: \'storeName\'" href="{{ store.href }}" rel="{{ store.storeCode }}" target=\'_blank\'>{{ store.storeName }}</a>\n		</div>\n	</div>	\n</div>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/directives/videoSample.html",'<a href="#" ng-click="playVideo()" title="Play {{ videoTitle }}" class=\'videoLink\'>\n	<div class="btnPlay"><img src="/assets/img/site/btnPlay.png" alt="Play {{ videoTitle }}" /></div>\n	<img ng-src="{{ videoThumbnail }}" title="{{ videoTitle }}" alt="Play {{ videoTitle }}">\n</a>')}]),angular.module("vmMusic").run(["$templateCache",function(e){e.put("/components/videos.html",'<div class="video itemBackground" ng-repeat="video in allVideos">\n	<video-sample video-src="video.embedUrl" video-title="video.title" video-thumbnail="video.thumbnail"></video-sample>\n    <div class="videoDetails">\n        <div class="itemTitle">{{ video.title }}</div>\n        <div class="info">{{ video.description }}</div>\n    </div>\n</div>\n')}]);