angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/components/bio.html',
        "<div class=\"pageHeader\"><img alt=\"{{ bio.title }}\" data-ng-src=\"{{ bio.img }}\"></div>\n<h1>Biography</h1>\n<div data-ng-bind-html=\"bio.biography\"></div>");
}]);