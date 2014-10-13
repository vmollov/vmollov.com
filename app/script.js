"use strict";var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-38398614-1"]),_gaq.push(["_trackPageview"]),function(){var ga=document.createElement("script");ga.type="text/javascript",ga.async=!0,ga.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ga,s)}();var vmMusic=angular.module("vmMusic",["ngRoute","ngResource","ngSanitize","ngAnimate","ngTouch"]);vmMusic.config(function($routeProvider,$locationProvider){$routeProvider.when("/",{templateUrl:"templates/home.html",controller:"homeCtrl"}),$routeProvider.when("/biography",{templateUrl:"templates/bio.html",controller:"bioCtrl"}),$routeProvider.when("/calendar",{templateUrl:"templates/calendar.html",controller:"calendarCtrl"}),$routeProvider.when("/recordings",{templateUrl:"templates/recordings.html",controller:"recordingsCtrl"}),$routeProvider.when("/photos",{templateUrl:"templates/photos.html",controller:"photosCtrl"}),$routeProvider.when("/videos",{templateUrl:"templates/videos.html",controller:"videosCtrl"}),$routeProvider.when("/contact",{templateUrl:"templates/contact.html",controller:"contactCtrl"}),$locationProvider.html5Mode(!0).hashPrefix("!")}),vmMusic.controller("bioCtrl",function($scope,$resource){$scope.bio=$resource("/data/bio").get()}),vmMusic.controller("calendarCtrl",function($scope,calendarData){calendarData.getUpcomingEvents().then(function(data){$scope.upcomingEvents=data,$scope.upcommingEventOrderPredicate="startTime"},function(status){console.log("error retrieving upcoming events: "+status)}),calendarData.getRecentEvents().then(function(data){$scope.recentEvents=data,$scope.recentEventOrderPredicate="-startTime"},function(status){console.log("error retrieving recent events: "+status)})}),vmMusic.controller("contactCtrl",function($scope,contactData){$scope.contact=contactData.getContactData()}),vmMusic.controller("footerCtrl",function($scope,contactData){$scope.about=contactData.getContactData()}),vmMusic.controller("headerCtrl",function($scope,$location){function isCurrentPageHome(){return"/"==$location.$$path}function swapBannerElements(removeElement,displayElement,parentElement){removeElement.animate({opacity:0},200,function(){parentElement.animate({height:displayElement.height()},300,function(){displayElement.css("display","inline"),displayElement.animate({opacity:1}),removeElement.css("display","none")})})}$scope.$watch(function(){return $location.$$path},function(){isCurrentPageHome()?swapBannerElements($(".regularBanner"),$(".homeBanner"),$(".banner")):swapBannerElements($(".homeBanner"),$(".regularBanner"),$(".banner"))}),$(window).resize(function(){$(".banner").height(isCurrentPageHome()?$(".homeBanner").height():$(".regularBanner").height())}),$scope.displayFeatureEvent=isCurrentPageHome}),vmMusic.controller("homeCtrl",function($scope,$sce,welcomeData,newsData,featureData){welcomeData.getWelcomeMessage().then(function(data){$scope.welcomeMessage=$sce.trustAsHtml(data.welcome)},function(status){console.log("error fetching welcome message: "+status)}),$scope.news=newsData.getAllNewsItems(),$scope.newsOrderPredicate="-id",featureData.getFeatures().then(function(data){$scope.videoFeatures=data.video,$scope.audioFeatures=data.audio,$scope.featuresOrderPredicate="order"},function(status){console.log("error fetching features: "+status)})}),vmMusic.controller("photosCtrl",function($scope,photosData){function animateThumbView(){var thumbSliderOffset=function(){for(var totalOffset=0,elementCollection=$("ul.nav>li>img"),i=0;thumbsImageOffset>i;i++)totalOffset+=elementCollection[i].width+10;return totalOffset}();$(".thumbSlider .nav").animate({marginLeft:-thumbSliderOffset},400)}function getThumbsViewBounds(){return{low:Math.floor(.25*getNumberOfDisplayedThums())+1,high:Math.floor(.75*getNumberOfDisplayedThums())-1}}function getNumberOfDisplayedThums(){var avgThumbWidth=thumbsViewWidth/$scope.photos.length;return $(".thumbSlider").width()/avgThumbWidth}$scope.photos=[],photosData.getAllImages().then(function(data){$scope.photos[0]=data[0];for(var i=1;i<data.length;i++){for(var placedImage=!1,n=0;n<$scope.photos.length;n++)if(data[i].dateupload>=$scope.photos[n].dateupload){$scope.photos.splice(n,0,data[i]),placedImage=!0;break}placedImage||$scope.photos.push(data[i])}$scope.photo=$scope.photos[0]});var thumbsViewWidth=0,thumbsImageOffset=0,_Index=0;$scope.getThumbsWidth=function(){return{width:thumbsViewWidth+"px"}},$scope.updateThumbViewWidth=function(imageElement){thumbsViewWidth+=imageElement.width()+15},$scope.isActive=function(index){return _Index===index},$scope.updateSlideCaptionWidth=function(){},$scope.showPrev=function(){var index=_Index>0?_Index-1:$scope.photos.length-1;$scope.showPhoto(index)},$scope.showNext=function(){var index=_Index<$scope.photos.length-1?_Index+1:0;$scope.showPhoto(index)},$scope.showPhoto=function(index){for(_Index=index,$scope.photo=$scope.photos[index],index==$scope.photos.length-1&&(thumbsImageOffset=index-getThumbsViewBounds().high);thumbsImageOffset<index-getThumbsViewBounds().high&&index<$scope.photos.length-1;)thumbsImageOffset++;for(;thumbsImageOffset>index-getThumbsViewBounds().low&&thumbsImageOffset>0;)thumbsImageOffset--;animateThumbView()},$scope.imageCounter=function(){return _Index+1+"/"+$scope.photos.length},$scope.thumbViewNext=function(){return thumbsImageOffset>$scope.photos.length-getThumbsViewBounds().high?void(thumbsImageOffset=$scope.photos.length-getThumbsViewBounds().high):(thumbsImageOffset+=2,void animateThumbView())},$scope.thumbViewPrevious=function(){0!=thumbsImageOffset&&(thumbsImageOffset-=2,animateThumbView())},$(document).keydown(function(e){37==e.keyCode&&$scope.showPrev(),39==e.keyCode&&$scope.showNext(),$scope.$apply()}),$scope.thumbViewSwipeAdvance=function(forward){forward?thumbsImageOffset++:thumbsImageOffset--,forward?$scope.thumbViewNext():$scope.thumbViewPrevious()}}),vmMusic.controller("recordingsCtrl",function($scope,recordingsData){recordingsData.getAllRecordings().then(function(data){$scope.recordings=data,$scope.recordingsOrderPredicate="order"})}),vmMusic.controller("videosCtrl",function($scope,videosData){videosData.getYouTubeVideos().then(function(data){$scope.allVideos=videosData.sanitizeYouTubeVideos(data.feed.entry)},function(status){console.log("error fetching videos: "+status)})}),vmMusic.directive("audioPlayer",function(audioManager){return{restrict:"E",replace:!0,templateUrl:"/templates/directives/audioPlayer.html",scope:{},controller:function($scope,$rootScope){function play(){showPlayer(),clearTimeout(hidePlayerTimeout),$("#mpegSource").attr("src","/audio/"+$scope.audioSrc+".mp3"),$("#oggSource").attr("src","/audio/"+$scope.audioSrc+".ogg"),playerElement.load().get(0).play()}function stop(){playerElement.get(0).pause(),hidePlayerTimeout=setTimeout(hidePlayer,1500)}function showPlayer(){playerVisible||(playerContainer.css({display:"block"}),playerContainer.animate({bottom:1},700,function(){playerVisible=!0}))}function hidePlayer(){playerElement.get(0).paused&&playerContainer.animate({bottom:"-100%"},700,function(){playerVisible=!1,playerContainer.css({display:"none"})})}var hidePlayerTimeout,playerContainer=$("#audioPlayerContainer"),playerElement=$("#audioPlayer"),playerVisible=!1;$scope.btnPlayStatus=function(){return playerElement.get(0).paused?"/img/site/btnPlay_audio.png":"/img/site/btnPause_audio.png"},$scope.togglePlay=function(){playerElement.get(0).paused?play():stop()},$scope.volume=.75,$scope.changeVolume=function(){playerElement.get(0).volume=$scope.volume},$scope.timeIndicator="0:00",playerElement.bind("timeupdate",function(){var seconds=Math.round(this.currentTime/60%1*60);10>seconds&&(seconds="0"+seconds);var minutes=Math.floor(this.currentTime/3600%1*60);10>minutes&&(minutes="0"+minutes),$scope.timeIndicator=minutes+":"+seconds,$scope.$apply()}),$scope.$on("playAudioStartRequestEvent",function(event,audioParams){$scope.audioTitle=audioParams.title,$scope.audioSrc=audioParams.src,play()}),$scope.$on("playAudioStopRequestEvent",stop),playerElement.bind("pause",function(){audioManager.setCurrentlyPlayingAudio(""),$rootScope.$broadcast("playAudioGlobalStopRequestEvent"),stop()}),playerElement.bind("play",function(){audioManager.setCurrentlyPlayingAudio($scope.audioSrc),$rootScope.$broadcast("playAudioGlobalStartRequestEvent",{src:$scope.audioSrc})}),playerElement.bind("ended",function(){$scope.timeIndicator="00:00",$scope.$apply()})}}}),vmMusic.directive("audioSample",function(audioManager){return{restrict:"E",replace:!0,transclude:!0,templateUrl:"/templates/directives/audioSample.html",scope:{src:"=",songTitle:"="},controller:function($scope,$rootScope){function changePlayStatus(status){$scope.btnPlay.status="play"==status?playStatus.playing:playStatus.paused}var playStatus={playing:"/img/site/btnPause_audio.png",paused:"/img/site/btnPlay_audio.png"};$scope.btnPlay={},$scope.btnPlay.status=audioManager.getCurrentlyPlayingAudio()==$scope.src?playStatus.playing:playStatus.paused,$scope.togglePlayPaused=function(){$scope.btnPlay.status==playStatus.paused?$scope.playAudio():$scope.pauseAudio()},$scope.playAudio=function(){changePlayStatus("play"),$rootScope.$broadcast("playAudioStartRequestEvent",{src:$scope.src,title:$scope.songTitle})},$scope.pauseAudio=function(){changePlayStatus("pause"),$rootScope.$broadcast("playAudioStopRequestEvent")},$scope.$on("playAudioGlobalStopRequestEvent",function(){changePlayStatus("pause"),$scope.$apply()}),$scope.$on("playAudioGlobalStartRequestEvent",function(event,audioData){changePlayStatus(audioData.src==$scope.src?"play":"pause"),$scope.$apply()})}}}),vmMusic.directive("calendarEvent",function(){return{restrict:"E",replace:!0,templateUrl:"/templates/directives/calendarEvent.html",scope:{event:"="}}}),vmMusic.directive("featureEvent",function(calendarData){return{restrict:"E",replace:!0,templateUrl:"/templates/directives/featureEvent.html",scope:{display:"="},controller:function($scope){function displayFeatureEvent(){return $scope.display?void 0==$scope.event?void(30>displayAttemptCounter&&setTimeout(displayFeatureEvent,500)):void(displayTimeout=setTimeout(function(){$("#hEvent").toggleClass("displayControl",!0),$("#hEvent").animate({opacity:1},700)},1800)):void 0}function hideFeatureEvent(){clearTimeout(displayTimeout),$("#hEvent").animate({opacity:0},400,function(){$("#hEvent").toggleClass("displayControl",!1)})}calendarData.getNextEvent().then(function(nextEvent){$scope.event=nextEvent}),$scope.$watch("display",function(){$scope.display?displayFeatureEvent():hideFeatureEvent()});var displayTimeout,displayAttemptCounter=0}}}),vmMusic.directive("onLoad",function(){return{restrict:"A",replace:!1,link:function(scope,element){element.bind("load",function(){scope.$apply(scope.callback(element))})},scope:{callback:"="}}}),vmMusic.directive("navigation",function(){return{restrict:"E",replace:!0,templateUrl:"/templates/directives/navigation.html",scope:{},controller:function($scope,$location){$scope.currentPage=function(){return"/"==$location.$$path?"":" - "+$location.$$path.substr(1).toUpperCase()},$("li.hasSub").on("mouseleave",function(){$("li.hasSub").toggleClass("hover",!1)}),$("#close").on("touchstart",function(){$("li.hasSub").off("mouseover")}),$("li.hasSub").on("click",function(){$("li.hasSub").toggleClass("hover")}),$(".menuTitle").on("click",function(){$("nav > ul li:not(.menuTitle)").toggleClass("menuItemOn"),$(".menuItemOn:not(.hasSub)").off("click"),$(".menuItemOn:not(.hasSub)").on("click",function(){$("nav > ul li:not(.menuTitle)").toggleClass("menuItemOn",!1)})})}}}),vmMusic.directive("videoSample",function(){return{restrict:"E",replace:!0,templateUrl:"/templates/directives/videoSample.html",scope:{videoSrc:"=",videoTitle:"=",videoThumbnail:"="},controller:function($scope,$rootScope){function displayVideoContainer(){if($("#videoPlayerContainer").length>0)return void $("#videoPlayerContainer iframe").attr("src",$scope.videoSrc);var videoContainer=$("<div id='videoPlayerContainer'></div>"),controlFrame=$("<div class='closeOverlay'><a href='#' class='closeButton'>close<img src='/img/site/btnPopupClose.png'/></a></div>"),videoFrame=$("<iframe width='"+.8*window.innerWidth+"' height='"+.8*window.innerHeight+"' src='"+$scope.videoSrc+"' frameborder='0' allowfullscreen></iframe>");videoContainer.append(controlFrame),videoContainer.append(videoFrame),$("body").append(videoContainer),videoContainer.animate({top:"10%"},700),$("#videoPlayerContainer .closeButton").on("click",hideVideoContainer),$("#videoPlayerContainer").on("click",function(e){e.stopPropagation()}),$("html").on("click",hideVideoContainer),$(document).keyup(function(e){27==e.which&&hideVideoContainer()})}function hideVideoContainer(){$("#videoPlayerContainer").animate({top:"100%"},700,function(){$("#videoPlayerContainer").remove()}),$("#videoPlayerContainer .closeButton").off("click",hideVideoContainer)}$scope.playVideo=function(){$rootScope.$broadcast("playAudioStopRequestEvent"),displayVideoContainer()},$rootScope.$on("playAudioGlobalStartRequestEvent",hideVideoContainer),$(".videoLink").on("click",function(e){e.stopPropagation()})}}}),vmMusic.filter("timeZone",function(){return function(val){return null!=val&&val.length>16?val.substring(0,16):val}}),vmMusic.filter("toTrusted",["$sce",function($sce){return function(text){return $sce.trustAsHtml(text)}}]),vmMusic.factory("audioManager",function(){var audioSrc;return{getCurrentlyPlayingAudio:function(){return audioSrc},setCurrentlyPlayingAudio:function(src){audioSrc=src}}}),vmMusic.factory("calendarData",function($http,$q){function parseCalendarData(data,boolFuture){for(var events=[],i=0;i<data.length;i++){var startTime=new Date(data[i].gd$when[0].startTime);if(startTime>new Date&&boolFuture||startTime<new Date&&!boolFuture){var thisEvent=getCalendarEventFromRawData(data[i]);events.push(thisEvent)}}return events}function getCalendarEventFromRawData(data){return{title:data.title.$t,startTime:data.gd$when[0].startTime,location:data.gd$where[0].valueString,description:data.content.$t}}var calId="5s80mf8pl7rtkj9bpasndqqe58@group.calendar.google.com",gCalUrl="http://www.google.com/calendar/feeds/"+calId+"/public/full?alt=json&max-results=90&singleevents=false&sortorder=descending&orderby=starttime",calData=$q.defer();$http({method:"GET",url:gCalUrl}).success(function(result){calData.resolve(result.feed.entry)}).error(function(error){console.log("An error occured while getting calendar events. "+error)});var upcomingEvents=calData.promise.then(function(data){return parseCalendarData(data,!0)}),recentEvents=calData.promise.then(function(data){return parseCalendarData(data,!1)}),nextEvent=calData.promise.then(function(data){for(var nextEventData,i=0;i<data.length;i++){var startTime=new Date(data[i].gd$when[0].startTime);startTime>new Date&&(void 0==nextEventData||startTime<new Date(nextEventData.gd$when[0].startTime))&&(nextEventData=data[i])}return void 0==nextEventData?void 0:getCalendarEventFromRawData(nextEventData)});return{getUpcomingEvents:function(){return upcomingEvents},getRecentEvents:function(){return recentEvents},getNextEvent:function(){return nextEvent}}}),vmMusic.factory("contactData",function($resource){var newsResource=$resource("/data/about");return{getContactData:function(){return newsResource.get()}}}),vmMusic.factory("featureData",function($http,$q){return{getFeatures:function(){var deferred=$q.defer();return $http({method:"GET",url:"/data/features"}).success(function(data){deferred.resolve(data)}),deferred.promise}}}),vmMusic.factory("newsData",function($resource){var newsResource=$resource("/data/news");return{getAllNewsItems:function(){return newsResource.query()}}}),vmMusic.factory("photosData",function($http){function getImageSizesUrl(photoId){return"https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key="+apiKey+"&photo_id="+photoId+"&format=json&nojsoncallback=1"}function getImages(data){for(var photos=data.data.photoset.photo,i=0;i<photos.length;i++)getImageSizes(photos[i]);return photos}function getImageSizes(currentPhoto){$http({method:"GET",url:getImageSizesUrl(currentPhoto.id)}).then(function(result){currentPhoto.source=function(images){for(var imageSet={},i=0;i<images.length;i++)"Square"==images[i].label&&(imageSet.thumbnail=images[i].source),"Medium"==images[i].label&&(imageSet.medium=images[i].source),"Original"==images[i].label&&(imageSet.original=images[i].source);return imageSet}(result.data.sizes.size)})}var apiKey="48dad8a586fe5931b1db3c1026e0564b",albumUrl="https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+apiKey+"&photoset_id=72157645114741942&extras=date_upload&format=json&nojsoncallback=1",albumData=$http({method:"GET",url:albumUrl}).then(getImages);return{getAllImages:function(){return albumData}}}),vmMusic.factory("recordingsData",function($http,$q){return{getAllRecordings:function(){var deferred=$q.defer();return $http({method:"GET",url:"/data/recordings"}).success(function(data){deferred.resolve(data)}),deferred.promise}}}),vmMusic.factory("videosData",function($http,$q){function isExcluded(entryUrl){for(var i=0;i<excludeList.length;i++)if(entryUrl.indexOf(excludeList[i])>-1)return!0;return!1}function getVideoEmbedUrl(videoUrl){var url=videoUrl.media$group.media$content[0].url;return url.replace(/\/v\//,"/embed/")+"&autoplay=1"}function getVideoTitle(video){return video.media$group.media$title.$t}function getVideoThumbnail(video){return video.media$group.media$thumbnail[1].url}function getVideoDescription(video){return video.media$group.media$description.$t}var searchTerm="Vladimir Mollov",resultCount=18,excludeList=["iUL7wOzp698","FDFBDw97Epg","tbQHOigF8WA","WuZE2vidsIM","U9Tb3HWkJRE"];resultCount+=excludeList.length;var searchTerm=searchTerm.replace(/ +/,"/"),feedURL="http://gdata.youtube.com/feeds/api/videos/-/"+searchTerm+"?max-results="+resultCount+"&alt=json&orderby=published";return{getYouTubeVideos:function(){var deferred=$q.defer();return $http({method:"GET",url:feedURL}).success(function(data){deferred.resolve(data)}),deferred.promise},sanitizeYouTubeVideos:function(feedEntries){for(var i=0;i<feedEntries.length;i++)isExcluded(feedEntries[i].id.$t)&&feedEntries.splice(i,1);for(var resultList=[],i=0;i<feedEntries.length;i++)resultList.push({embedUrl:getVideoEmbedUrl(feedEntries[i]),title:getVideoTitle(feedEntries[i]),thumbnail:getVideoThumbnail(feedEntries[i]),description:getVideoDescription(feedEntries[i])});return resultList}}}),vmMusic.factory("welcomeData",function($http,$q){var deferred=$q.defer();return{getWelcomeMessage:function(){return $http({method:"GET",url:"data/welcome"}).success(function(data){deferred.resolve(data)}),deferred.promise}}});