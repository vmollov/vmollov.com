<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<?php require 'commonHead.php'; ?>
	</head>
	<body>
		<div id="main">
			<? require 'header.php'; ?>	
            <div class="sheetpiece">
				<div class="sheetpieceImage"><img src="res/sheetmusic/Breeze_from_Paris.png" /></div>
				<div class="sheetpieceDesc">
					<p class="title">Breeze from Paris</p>
					<p>A piece I wrote for solo accordion.  The chord progression is included so it can be played with some accompaniment as well.  This peace is included in my album Dreams.</p>
				</div>
				<div class="orderLinks">
					<a href="#" target="_blank">
                    	<div class='buynow'>ORDER NOW!</div>
						<img src="res/img/site/paypal.png" width="120px" />
                    </a>
				</div>
			</div>
            <? require 'footer.php'; ?>
		</div>
	</body>
</html>
<? require 'commonFoot.php'; ?>
<script language="javascript">
	$(".sheetpieceImage").click(function(){
		$("body").append("<img id='sheetpiecePreview' src='" + $(this).find("img").attr("src") + "' />");
		$("#sheetpiecePreview")
			.css({"width":"1px", "top": "50%", "left":"50%", "display":"block", "position":"absolute"});		
		//$(this).effect("size", { to: {width: 200,height: 60} }, 1000);
	});
</script>