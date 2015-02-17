angular.module('vmMusic').run(['$templateCache', function($templateCache) {
    $templateCache.put('/components/contact.html',
        "<div class=\"pageHeader\"><img src=\"assets/img/misc/accordion.png\" title=\"Accordion - Siwa and Figli\" alt=\"Siwa and Figli Super Quatro\" /></div>\n<h1>Contact</h1>\n\n<p>For general information and booking please contact:</p>\n<p>Phone: <a href=\"tel: {{contact.phone}}\" title=\"Call Vladimir\">{{ contact.phone }}</a></p>\n<p>Email: <a href=\"mailto:{{ contact.email }}\" title=\"Email Vladimir\">{{ contact.email }}</a></p>\n<p class=\"hideOnSmall\">You can also use this widget to send Vladimir a voice message by clicking on the icon below and entering your name and phone number.  Your phone will ring and you will be able to leave Vladimir a message after answering.</p>\n<object class=\"hideOnSmall\" type=\"application/x-shockwave-flash\" data=\"https://clients4.google.com/voice/embed/webCallButton\" width=\"230\" height=\"85\"><param name=\"movie\" value=\"https://clients4.google.com/voice/embed/webCallButton\" /><param name=\"wmode\" value=\"transparent\" /><param name=\"FlashVars\" value=\"id=704396e5c99917296cead14873ae1fb2b1f65987&style=0\" /></object>");
}]);