angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/directives/audioSample.html',
        "<div rel=\"{{ src }}\" class=\"audioSample\">\n\t<img style=\"cursor: pointer;\" on-enter=\"togglePlayPaused()\" alt=\"play {{ songTitle }}\" tabindex=\"0\" data-ng-src=\"{{ btnPlay.status }}\" data-ng-click=\"togglePlayPaused()\">\n\t<div data-ng-transclude=\"\"> </div>\n</div>");
}]);