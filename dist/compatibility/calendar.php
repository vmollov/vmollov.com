<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<?php require 'commonHead.php'; ?>
	</head>
	<body>
		<div id="main">
			<? require 'header.php'; ?>

<?php
	
	$allEvents = null; //holder for the events JSON
	$jsonFile = "res/cache/gcal.json";
    if(file_exists($jsonFile))	
    	$allEvents = json_decode(file_get_contents($jsonFile), true);
    	$allEvents = $allEvents['items'];
    	
	//Display the events
	date_default_timezone_set('America/New_York'); //set timezone	
	
	if(sizeof($allEvents)>0){
?>
 			<h1 id="pageTitle">Upcoming Events</h1>
<?
	    for($i=0; $i<sizeof($allEvents); $i++){ //loop through retrieved data
?>
        <div class='event'>
        	<div class='eventDetails'>
            	<div class='eventTitle'><?="{$allEvents[$i]['summary']}"?></div>
                <div class='eventTime'>
                	<?=date('l, F d, Y - g:i a' , strtotime($allEvents[$i]['start']['dateTime']))?>
        		</div>
       			<div class='eventLocation'>Location: <label for='address'><?=$allEvents[$i]['location']?></label></div>
        		<div class='eventInfo'><strong>More Info: </strong><?=$allEvents[$i]['description']?></div>
        	</div>
        </div>
<? 
   		}//for $allEvents
   	}//if $allEvents>0
   	
	//if there are less than 3 events display most recent past 3 events
   	$jsonArchiveFile = "res/cache/gcalArchive.json";
   	if(sizeof($allEvents)<3 and file_exists($jsonArchiveFile)){
   		$allEvents = json_decode(file_get_contents($jsonArchiveFile), true);
   		$allEvents = $allEvents['items'];
   		if(sizeof($allEvents)>0){
?>
			<h1 id="pageTitle">Recent Events</h1>
<?   	
			for($i=sizeof($allEvents)-1; $i>-1; $i--){
?>
        <div class='event'>
        	<div class='eventDetails'>
            	<div class='eventTitle'><?="{$allEvents[$i]['summary']}"?></div>
                <div class='eventTime'>
                	<?=date('l, F d, Y - g:i a' , strtotime($allEvents[$i]['start']['dateTime']))?>
        		</div>
       			<div class='eventLocation'>Location: <label for='address'><?=$allEvents[$i]['location']?></label></div>
        		<div class='eventInfo'><strong>More Info: </strong><?=$allEvents[$i]['description']?></div>
        	</div>
        </div>
<? 				
				if(sizeof($allEvents) - $i >= 3) break; //display only most recent 3 events
			}//for	
		}//if sizeof($allEvents)>0
   	} //if archive check
?>
   			<? $mapEnable=true; ?>
            <? require 'footer.php'; ?>
		</div>
	</body>
</html>
<? require 'commonFoot.php'; ?>
