angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/directives/audioSample.html',
        "<div rel=\"{{ src }}\" class=\"audioSample\">\n\t<img ng-src=\"{{ btnPlay.status }}\" style=\"cursor: pointer;\" ng-click=\"togglePlayPaused()\" alt=\"play {{ songTitle }}\">\n\t<div ng-transclude> </div>\n</div>");
}]);