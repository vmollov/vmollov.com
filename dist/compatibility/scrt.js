function showOverlay(innerObject, callback){
    $("body").append("<div id='overlay' style='display:none'></div>");
    $("#overlay").fadeIn('slow', function(){
        $("body").append(innerObject.css("display","none"));
	if(callback) callback();
        innerObject.css({
           'margin-left': (parseInt(innerObject.css("width"))/-2) + "px",
           'margin-top': (parseInt(innerObject.css("height"))/-2) + "px"
        }).prepend("<div id='closeOverlay'><a href='javascript: void(0);' onclick='$(\"#overlay\").click()'>close<img src='res/img/site/btnPopupClose.png'/></a></div>").slideDown("slow");
	$("body").css("overflow", "hidden");
    }).click(function(){
        innerObject.fadeOut("slow", function(){
           $("#overlay").fadeOut("fast").remove();
		$("body").css("overflow", "auto");
        }).remove();
    });
}
function playVideo(url){
	//create the jQuery object to be displayed in the overlay
    	var vidoContainer = jQuery("<div id='overlayedContent'><iframe width='" + (window.innerWidth/1.5) + "' height='" + (window.innerHeight/1.5) + "' src='" + url + "' frameborder='0' allowfullscreen></iframe></div>"); 
    	showOverlay(vidoContainer, null);
}

$(window).on('load', function(){
	//adjust the height of the content div to fill the available vertical space
	var winHeight = parseInt($(window).height());
	var contentHeight = parseInt($("#pageContent").height());
	var contentTop = parseInt($("#pageContent").offset().top) + 34;
	if(contentHeight + contentTop < winHeight) $("#pageContent").css("height", (winHeight - contentTop) + "px");
});

$(document).ready(function(){
	//this function will automatically add image icons to the "buy from" links
	$(".storeLinks a").each(function(){
		$(this).prepend("<img src='res/img/site/" + this.rel + ".png' width='36px' />");
	});
	
	$(".albumSamples > div").each(function(){
		$(this).prepend("<img src='res/img/site/btnPlay_audio.png' />"); //add the play button
		$(this).find("img")
			.css("cursor", "pointer")
			.click(function(){ 
				var clickedObject = this;
				//reset potential playing song samples
				$(".albumSamples > div > img").each(function(){ if($(this).data("playState") == "playing" && this != clickedObject) this.click(); });  
				if($(this).data("playState") == "playing"){ //pause has been requested
					$(this).attr("src", "res/img/site/btnPlay_audio.png"); //change the pause icon to play
					$("#samplesPlayer").get(0).pause(); //pause player
					$(this).data("playState", "paused"); //record the pause in song sample state
				}else{
					var pieceFileName = $(this).parent().attr("rel");
					//set the source attributes
					$("#audio1").attr("src", "res/audio/" + pieceFileName + ".mp3");
					$("#audio2").attr("src", "res/audio/" + pieceFileName + ".ogg");
					$("#samplesPlayer").load().get(0).play(); // load and play the selected song
					$(this).attr("src", "res/img/site/btnPause_audio.png"); //change the play icon to pause
					$(this).data("playState", "playing"); //record the play in song sample state
				}
			});
	});
	$("#samplesPlayer").bind("ended", function(){
		$(".albumSamples > div > img").attr("src", "res/img/site/btnPlay_audio.png");
	});
	
	$(".transparentFrame").each(function(){ //to add a semi-transparent frame insert a div and copy its positioning elements from the calling element
		$(this).before('<div id="' + this.id + '_bg" class="transparentWrapper">&nbsp;</div>');
		$("#" + this.id + "_bg").css({
			top:$(this).css("top"),
			bottom:$(this).css("bottom"),
			left:$(this).css("left"),
			right:$(this).css("right"),
			width:$(this).css("width"),
			height:$(this).css("height"),
			"padding-left":$(this).css("padding-left"),
			"padding-right":$(this).css("padding-right"),
			"padding-top":$(this).css("padding-top"),
			"padding-bottom":$(this).css("padding-bottom"),
			"margin-left":$(this).css("margin-left"),
			"margin-right":$(this).css("margin-right"),
			"margin-top":$(this).css("margin-top"),
			"margin-bottom":$(this).css("margin-bottom")
		});
	});
});
