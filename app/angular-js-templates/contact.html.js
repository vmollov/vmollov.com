angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/components/contact.html',
        "<div class=\"pageHeader\"><img src=\"assets/img/misc/accordion.png\" title=\"Accordion - Siwa and Figli\" alt=\"Siwa and Figli Super Quatro\" /></div>\n<h1>Contact</h1>\n\n<p>For general information and booking please contact:</p>\n<p>Phone: <a href=\"tel: {{contact.phone}}\" title=\"Call Vladimir\">{{ contact.phone }}</a></p>\n<p>Email: <a href=\"mailto:{{ contact.email }}\" title=\"Email Vladimir\">{{ contact.email }}</a></p>");
}]);