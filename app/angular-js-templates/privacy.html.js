angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/components/privacy.html',
        "<div class=\"privacyContainer\">\n    <p>\n        This website uses only publicly available data from the the YouTube API which is governed by the YouTube <a href=\"https://www.youtube.com/t/terms\" target=\"_blank\">Terms of Service</a>.\n    </p>\n</div>");
}]);