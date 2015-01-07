angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/components/videos.html',
        "<div class=\"video itemBackground\" ng-repeat=\"video in allVideos\">\n\t<video-sample video-src=\"video.embedUrl\" video-title=\"video.title\" video-thumbnail=\"video.thumbnail\"></video-sample>\n    <div class=\"videoDetails\">\n        <div class=\"itemTitle\">{{ video.title }}</div>\n        <div class=\"info\">{{ video.description }}</div>\n    </div>\n</div>\n");
}]);