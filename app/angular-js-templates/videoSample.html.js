angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/directives/videoSample.html',
        "<a href=\"#\" on-enter=\"playVideo()\" title=\"Play {{ videoTitle }}\" class=\"videoLink\" tabindex=\"0\" data-ng-click=\"playVideo()\">\n\t<div class=\"btnPlay\"><img src=\"/assets/img/site/btnPlay.png\" alt=\"Play {{ videoTitle }}\"></div>\n\t<img title=\"{{ videoTitle }}\" alt=\"Play {{ videoTitle }}\" data-ng-src=\"{{ videoThumbnail }}\">\n</a>");
}]);