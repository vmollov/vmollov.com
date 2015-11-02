angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/directives/featureEvent.html',
        "<div id='hEvent'>\n\t<h3>Upcoming</h3>\n    <p class=\"hevent_title\">{{ event.title  }}</p>\n    <p><a href=\"http://maps.google.com/?q={{ event.location }}\" target=\"_blank\">{{ event.location }}</a></p>\n    <p>{{ event.startTime | timeZone | date: 'EEEE, MMMM dd, yyyy - h:mm a' }}</p>\n    <p>For more upcoming performances visit <a href=\"/calendar\">calendar</a>.</p>\n</div>");
}]);