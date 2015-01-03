'use strict'

// redirect to classic site if browser is IE 9 or lower
var Browser = {
    IsIe: function () {
        return navigator.appVersion.indexOf("MSIE") != -1;
    },
    Version: function() { // we assume a sane browser and downgrade if necessary
       return version = navigator.appVersion.indexOf("MSIE") != -1 ? parseFloat(navigator.appVersion.split("MSIE")[1]) : 999;
    }
};
if (Browser.IsIe && Browser.Version() <= 9)
	window.location.href="http://" + window.location.host + "/compatibility/index.php";

// todo: change config - include jquery 2.0 and analytics
require.config({
    baseUrl: "js",    
    paths: {
        'angular': '.../angular.min',
        'angular-route': '.../angular-route.min',
        'angularAMD': '.../angularAMD.min'
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'] },
    deps: ['app']
});