<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<?php require 'commonHead.php'; ?>
  		<link rel="stylesheet" type="text/css" href="lib/adgallery/lib/jquery.ad-gallery.css">
		<style>
			.ad-gallery { width: 824px; }
			/*.ad-gallery .ad-image-wrapper { height: 558px; } */
		</style>
		<script language="javascript">
			var aHeight = parseInt($(window).height()) - 333;
			document.write("<style>.ad-gallery .ad-image-wrapper { height: " + aHeight + "px; }</style>");
		</script>
	</head>
	<body>
		<div id="main">
			<? require 'header.php'; ?>	
			<!--image gallery plugin --->
			<div id="gallery" class="ad-gallery">
				<div class="ad-image-wrapper"></div>
				<div class="ad-controls"></div>
				<div class="ad-nav">
					<div class="ad-thumbs">
						<ul class="ad-thumb-list">
<?
//get all thumb files from the gallery dir  - they start with t_
$path = 'res/img/gallery/t_*';
$counter = 0; //this counter will be added to the end of ctime in order to avoid duplicate dates for the sort
foreach (glob($path) as $filename) $files[filectime($filename) + $counter++]=basename($filename); // or just $filename
krsort($files); //arrange them by date

foreach($files as $file){
	$fullSizeFileName = substr($file, 2);
	$title = preg_replace('"[0-9]*\.[A_Za-z0-9]{3}$"', '', $fullSizeFileName); //remove the extension and potential number at the end 
	$title = preg_replace('"_"', ' ', $title); //insert spaces before each capital letter
?>
							<li><a href="res/img/gallery/<?=$fullSizeFileName?>" title="<?=$title?>"><img src="res/img/gallery/<?=$file?>" title="<?=$title?>" height="66px" /></a></li>
<? } ?>
						</ul>
					</div>
				</div>
			</div>
			<!--image gallery plugin END --->
			<? require 'footer.php'; ?>	
		</div>
	</body>
</html>
<? require 'commonFoot.php'; ?>

<script type="text/javascript" src="lib/adgallery/lib/jquery.ad-gallery.js"></script>
<script type="text/javascript">
	var galleries = $('.ad-gallery').adGallery({
		loader_image: 'res/img/site/loader.gif',
		slideshow: { enable: false },
		callbacks: { init: function(){ this.preloadAll(); }}
	});
</script>
