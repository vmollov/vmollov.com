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
    $searchTerm = 'Vladimir Mollov';
    $resultCount = '18';
	$excludeList = array("iUL7wOzp698", "FDFBDw97Epg", "tbQHOigF8WA", WuZE2vidsIM, "U9Tb3HWkJRE");
	$resultCount += count($excludeList);
	
    $searchTerm = preg_replace('/[[:space:]]+/', '/', trim($searchTerm));
    $feedURL = "http://gdata.youtube.com/feeds/api/videos/-/{$searchTerm}?max-results={$resultCount}"; //&orderby=published"; // generate feed URL
    $sxml = simplexml_load_file($feedURL); //read feed into SimpleXML object
	
	function isExcluded($list, $theID){ //function to determine if a video is to be excluded from the search
		foreach($list as $checkItem) if(strrpos($theID, $checkItem) > -1) return true;	
		return false;
	}
?>

<?php
    // iterate over entries in resultset
    if(count($sxml->entry)==0) echo("No videos are available at this point.  Please check again later.");
    foreach ($sxml->entry as $entry) {
		if(isExcluded($excludeList, $entry->id)) continue;
        $media = $entry->children('http://search.yahoo.com/mrss/'); // get nodes in media: namespace for media information
        //$attrs = $media->group->player->attributes(); // get video player URL
        //$watch = $attrs['url'];
        $attrs = $media->group->content[0]->attributes();
        $embed = preg_replace("/\/v\//", "/embed/", $attrs['url']);
        $attrs = $media->group->thumbnail[1]->attributes(); // get video thumbnail - thumbnail[0] is a large image; thumbnail[1] is one of the 3 small images
        $thumbnail = $attrs['url'];
    ?>
        <div class="video">
            <a href="javascript: playVideo('<?=$embed?>&autoplay=1')" title="Play <?=$media->group->title?>"><div class="btnPlay"><img src="res/img/site/btnPlay.png" /></div><img src="<?=$thumbnail?>" title="<?=$media->group->title?>" alt="Play <?=$media->group->title?>"></a>
            <div class="videoDetails">
                <div class="videoTitle"><?=$media->group->title?></div>
                <div class="videoInfo"><?=$media->group->description?></div>
            </div>
        </div>
    <? } ?>
            <? require 'footer.php'; ?>
		</div>
	</body>
</html>
<? require 'commonFoot.php'; ?>