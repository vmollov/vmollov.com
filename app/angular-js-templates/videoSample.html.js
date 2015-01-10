angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/directives/videoSample.html',
        "<a href=\"#\" ng-click=\"playVideo()\" on-enter=\"playVideo()\" title=\"Play {{ videoTitle }}\" class='videoLink' tabindex=\"0\">\n\t<div class=\"btnPlay\"><img src=\"/assets/img/site/btnPlay.png\" alt=\"Play {{ videoTitle }}\" /></div>\n\t<img ng-src=\"{{ videoThumbnail }}\" title=\"{{ videoTitle }}\" alt=\"Play {{ videoTitle }}\">\n</a>");
}]);