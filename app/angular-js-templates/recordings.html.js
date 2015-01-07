angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/components/recordings.html',
        "<div class=\"itemBackground\" ng-repeat=\"album in recordings | orderBy: recordingsOrderPredicate\">\n\t<div class=\"album\">\n\t\t<div class=\"albumImage\"><img ng-src=\"{{ album.img }}\" alt=\"{{ album.title }}\" /></div>\n\t\t<div class=\"albumDesc\">\n\t\t\t<p class=\"title\">{{ album.title }}</p>\n\t\t\t<p>{{ album.description }}</p>\n\t\t</div>\n\t\t<div class=\"albumSamples\" ng-show=\"album.samples.length > 0\">\n\t\t\t<audio-sample ng-repeat=\"sample in album.samples | orderBy: recordingsOrderPredicate\" src=\"sample.src\" song-title=\"sample.title\">{{ sample.title }}</audio-sample>\n\t\t</div>\n\t\t<div class=\"storeLinks\">\n\t\t\t<div class='buynow' ng-show=\"album.storeLinks.length > 0\">BUY NOW!</div>\n\t\t\t<a ng-repeat=\"store in album.storeLinks | orderBy: 'storeName'\" href=\"{{ store.href }}\" rel=\"{{ store.storeCode }}\" target='_blank'>{{ store.storeName }}</a>\n\t\t</div>\n\t</div>\t\n</div>");
}]);