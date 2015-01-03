<?php
error_reporting(1); //display only errors, no warnings
	
	//Cal ID: 5s80mf8pl7rtkj9bpasndqqe58@group.calendar.google.com
	//$gCalURL = 'http://www.google.com/calendar/feeds/5s80mf8pl7rtkj9bpasndqqe58%40group.calendar.google.com/public/full?alt=json-in-script&max-results=25&singleevents=false&futureevents=true&sortorder=ascending&orderby=starttime';

	$gCalURL = "https://www.googleapis.com/calendar/v3/calendars/5s80mf8pl7rtkj9bpasndqqe58%40group.calendar.google.com/events"
		. "?key=AIzaSyC5HLhu4sREedJ5mmy5G_a2K6fk3gRsjXk"
		. "\&singleEvents=true"
		. "\&orderBy=startTime";
	
	//get future events ordered by start time
	$output = shell_exec("curl " . $gCalURL . "\&timeMin=" . urlencode(date("c", time())) . " > res/cache/gcal.json");
	echo "<pre>$output</pre>";
	
	//get past events
	$output = shell_exec("curl " . $gCalURL . "\&timeMax=" . urlencode(date("c", time())) . " > res/cache/gcalArchive.json");
	echo "<pre>$output</pre>";
?>
<p>Caches have been refreshed.</p>

