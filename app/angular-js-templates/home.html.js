angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/components/home.html',
        "<div class=\"home_left\">\n    <div id=\"h_welcome\">\n    \t<h2>Welcome</h2>\n        <welcome ng-bind-html=\"welcomeMessage\" />\n    </div>\n    <div id=\"h_news\">\n        <h2>News</h2>\n        <p ng-repeat=\"newsItem in news | orderBy: newsOrderPredicate\" ng-bind-html=\"newsItem.description\"></p>\n    </div>\n</div>\n<div class=\"home_right\"> \n    <h2>Features</h2>\n    <div class=\"h_videoFeature\">\n\t    <div class=\"video\" ng-repeat=\"video in videoFeatures | orderBy: featuresOrderPredicate\">\n\t    \t<video-sample video-src=\"video.src\" video-title=\"video.title\" video-thumbnail=\"video.img\"></video-sample>\n\t        <span ng-bind-html=\"video.title\"></span>                    \n\t    </div>\n\t</div>\n    <div class=\"h_audioFeature\">\n        <div class=\"audioFeature\" ng-repeat=\"audio in audioFeatures | orderBy: featuresOrderPredicate\">\n        \t<audio-sample src=\"audio.src\" song-title=\"audio.title\">{{ audio.title }}</audio-sample>\n        \t<p ng-bind-html=\"audio.description\"></p>\n        </div>\n    </div>\n</div>");
}]);