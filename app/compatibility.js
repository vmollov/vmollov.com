var Browser = {
    IsIe: function () {
        return navigator.appVersion.indexOf("MSIE") !== -1;
    },
    Version: function() {
    	// we assume a sane browser and downgrade if necessary
       return version = navigator.appVersion.indexOf("MSIE") != -1 ? parseFloat(navigator.appVersion.split("MSIE")[1]) : 999;
    }
};
//redirect to classic site if IE9 or lower
if (Browser.IsIe() && Browser.Version() <= 9) {
	window.location.href="http://" + window.location.host + "/compatibility/index.php";
}