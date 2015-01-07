angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/components/bio.html',
        "<div class=\"pageHeader\"><img ng-src=\"{{ bio.img }}\" alt=\"{{ bio.title }}\" /></div>\n<h1>Biography</h1>\n<div ng-bind-html=\"bio.biography\"></div>");
}]);