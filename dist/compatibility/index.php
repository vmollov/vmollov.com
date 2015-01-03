<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<?php require 'commonHead.php'; ?>
        <? $homepage = true; ?>
	</head>
	<body>
		<div id="main">
            <div id="logo">
                <a href="index.php">
                    <img src="res/img/site/banner_home.png" alt="Vladimir Mollov - Accordion" title="Vladimir Mollov - Accordion" />
                </a>
				<?php
                    date_default_timezone_set('America/New_York'); //set timezone
                    $topEvent = ""; //holder for the event JSON
                    $jsonFile = "res/cache/gcal.json";
				    if(file_exists($jsonFile)){
    					$fbEventsContent = json_decode(file_get_contents($jsonFile), true);
    					$fbEventsContent = $fbEventsContent['items'];
						$foundCurrent = false;
						$counter = 0;
						while(!$foundCurrent and $counter < sizeof($fbEventsContent)){
							$topEvent = $fbEventsContent[$counter]; 
							if(date("c", time()) <= date( 'c', strtotime($topEvent['start']['dateTime']))){
								$foundCurrent = true;
                ?>		
                        <div id='hEvent' class="transparentFrame">
                        	<h2 class="secTitle">Upcoming</h2>
                            <p id="hevent_title"><?="{$topEvent['summary']}"?></p>
                            <p id="hevent_details"><label for='address'><?=$topEvent['location']?></label></p>
                            <p><?=date('l, F d, Y - g:i a' , strtotime($topEvent['start']['dateTime']))?></p>
                            <p>For more upcoming performances visit <a href="calendar.php">calendar</a>.</p>
                        </div>
                <?php		
								break;
							}
							else $counter++;
						}
				 	}
				 ?>
            </div>
			<? require 'header.php'; ?>
				<div class="home_left">
                    <div id="h_welcome">
                    	<h2 class="secTitle">Welcome</h2>
                        <p>This is the official website of the concerting accordionist, Vladimir Mollov.  Here you can find information about upcoming performances, booking, as well as published recordings and original music.</p><p>For press materials you can download a <a href='res/VladimirMollov_presskit.zip' download='VladimirMollov_presskit.zip' target='_self'>digital press kit</a>. For booking you may <a href='mailto:music@vmollov.com'>send an email</a> or go to the <a href='contact.php'>contact page</a>.</p>
                    </div>
                    <div id="h_news">
                        <h2 class="secTitle">News</h2>
                        <p>I often get asked at gigs and workshops about my warm up routine, which is based on scales and arpeggios.  Developing skills with scales is important for professional and amateur musicians alike and has a multitude of benefits.  Since I am a techy person I developed and just released my first <a href="https://itunes.apple.com/us/app/modes-ear-trainer/id835866909?mt=8">iPhone app</a>.  It is a tool designed to help you recognize a variety of music modes/scales - everything from the ancient modes to jazz scales.  It will also track your progress over time.  <a href="https://itunes.apple.com/us/app/modes-ear-trainer/id835866909?mt=8">Check it out</a> - reviews are welcome!</p>
                        <p>Horizons on WQED recently had <a target="_blank" href="http://www.wqed.org/tv/watch/?id=636">a feature of me</a>.</p>
                        <p>I was recently featured in an article published in the Pittsburgh Post Gazette.  <a target="_blanl" href="http://www.post-gazette.com/stories/ae/music/person-of-interest-vladimir-mollov-accordion-virtuoso-640687/">Check it out!</a></p>
                    </div>
                </div>
                <div class="home_right"> 
                    <h2 class="secTitle">Features</h2>
                    <div class="featureVideo">
                        <a href="javascript:playVideo('http://www.youtube.com/embed/EkJRruiMHJ8?version=3&f=videos&app=youtube_gdata&autoplay=1')">
                            <div class="btnPlay"><img src="res/img/site/btnPlay.png"></div>
                            <img src="http://i.ytimg.com/vi/EkJRruiMHJ8/2.jpg">
                        </a>
                        Vladimir Mollov - Ruchenitsa<br />
                        Folklor TV 2013
                    </div>
                    <div class="featureVideo">
                        <a href="javascript:playVideo('http://www.youtube.com/embed/BsI4sFz-u-g?version=3&f=videos&app=youtube_gdata&autoplay=1')">
                            <div class="btnPlay"><img src="res/img/site/btnPlay.png"></div>
                            <img src="http://i.ytimg.com/vi/BsI4sFz-u-g/1.jpg">
                        </a>
                        Parafraz by Gridin<br />
                        Live Concert
                    </div>
                    <div class="featureVideo">
                        <a href="javascript:playVideo('http://www.youtube.com/embed/SExZmuBFmqE?version=3&f=videos&app=youtube_gdata&autoplay=1')">
                            <div class="btnPlay"><img src="res/img/site/btnPlay.png"></div>
                            <img src="http://i.ytimg.com/vi/SExZmuBFmqE/1.jpg">
                        </a>
                        Red and Black<br />
                        With Annie Mollova                    
                    </div>
                    <div id="h_audioFeature">
                        <div class="albumSamples">
                        	<div rel="Storm"><div>Storm</div></div>
                        	<p>Storm is one of Vladimir's compositions featuring Bulgarian folk style</p>
                        </div>
                        <div class="albumSamples">
                        	<div rel="TheHomecomer"><div>The Homecomer</div></div>
                        	<p>Arranged by Vladimir and composed by his father Kamen Mollov.</p>
                        </div>
                        <div class="albumSamples">
                        	<div rel="Oblivion"><div>Oblivion by Piazzolla</div></div>
                        	<p>An interpretation by Cuidado.</p>
                        </div>
                        <audio id='samplesPlayer'>
                            <source id='audio1' src='' type='audio/mpeg' />
                            <source id='audio2' src='' type='audio/ogg' />
                        </audio>
                    </div>
                </div>
                <div id="booking">
                
                </div>
   			<? $mapEnable=true; ?>
			<? require 'footer.php'; ?>
		</div>
	</body>
</html>
<? require 'commonFoot.php'; ?>
