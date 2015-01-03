<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<?php require 'commonHead.php'; ?>
</head>
<body>
	<div id="main">
		<? require 'header.php'; ?>	
		<!--<div id="albums">-->
			<div class="album">
				<div class="albumImage"><img src="res/img/albums/dreams.jpg" /></div>
				<div class="albumDesc">
					<p class="title">Dreams</p>
					<p>This is my first album of all original pieces.  The compositions are mostly based on Bulgarian ethnic music but there are some influences by French Mussette and jazz.</p>
				</div>
				<div class="albumSamples">
					<div rel="Village_Festival_web">Village Festival</div>
					<div rel="Breeze_From_Paris_web">Breeze from Paris</div>
					<div rel="To_My_Brother_web">To My Brother</div>
					<div rel="Dreams_web">Dreams</div>
				</div>
				<div class="storeLinks">
					<div class='buynow'>BUY NOW!</div>
					<a href="javascript: showMusicStore('http://www.cdbaby.com/widgets/store/store.aspx?id=KFQ2fefLvUmqr9IDk7uOsw%3d%3d&type=ByCustomer&c1=0x000000&c2=0xE0E0E0&c3=0xCCCCCC&c4=0x666666&c5=0x333333&c6=0xFFFFFF&c7=0xFFFFFF')" rel="cdbaby">CD Baby</a>
					<a href="http://www.amazon.com/Dreams-Vladimir-Mollov/dp/B001TKK7CG/" target="_blank" rel="amazon">Amazon</a>
					<a href="https://itunes.apple.com/us/album/dreams/id305554172" target="_blank" rel="itunes">iTunes</a>
				</div>
			</div>	
			<div class="album">
				<div class="albumImage"><img src="res/img/albums/cuidado.jpg" /></div>
				<div class="albumDesc">
					<p class="title">Cuidado</p>
					<p>The first album of the Cuidado Tango ensemble featuring some of the band's arrangements of traditional Argentene tangos from the golden age of tango, some more modern compositions by Astor Piazzolla, as well as several original pieces composed by members of the band. Two of my compositions are included.</p>
				</div>
				<div class="albumSamples">
					<div rel="MilongaDelAngel">Milonga Del Angel</div>
					<div rel="TangoPorAnne">Tango Por Anne</div>
					<div rel="EternalTango">Eternal Tango</div>
					<div rel="Libertango">Libertango</div>
				</div>
				<div class="storeLinks">
					<div class='buynow'>BUY NOW!</div>
					<a href="http://www.cdbaby.com/cuidado" target="_blank" rel="cdbaby">CD Baby</a>
					<a href="http://www.amazon.com/Cuidado/dp/B004VDDGGC/" target="_blank" rel="amazon">Amazon</a>
					<a href="https://itunes.apple.com/us/album/cuidado/id430676779" target="_blank" rel="itunes">iTunes</a>
				</div>
			</div>
			<div class="album">
				<div class="albumImage"><img src="res/img/albums/babik2.jpg" /></div>
				<div class="albumDesc">
					<p class="title">American Gypsy</p>
					<p>This is an album by the jazz band Babik featuring gypsy jazz - an early twentieth century style made vastly popular by Django Reinhardt.  I participate as a guest artist on two of the tracks.</p>
				</div>
				<div class="albumSamples">
					<div rel="Romungro_web">Romungro</div>
					<div rel="Lifecycles_web">Lifecycles</div>
				</div>
				<div class="storeLinks">
					
				</div>
			</div>
		<!--</div>-->
        <audio id='samplesPlayer'>
        	<source id='audio1' src='' type='audio/mpeg' />
            <source id='audio2' src='' type='audio/ogg' />
        </audio>
            <? require 'footer.php'; ?>
	</div>
</body>
</html>
<? require 'commonFoot.php'; ?>
<script language="javascript">
	function showMusicStore(storeURL){
		//create the jQuery object to be displayed in the overlay
		var vidoContainer = jQuery("<div id='overlayedContent'><iframe width='960' height='575' src='" + storeURL + "' frameborder='0' allowfullscreen></iframe></div>"); 
		showOverlay(vidoContainer);
	}
</script>
