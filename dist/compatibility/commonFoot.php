<? if($mapEnable) { ?>
	<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
    <script language="javascript">
		//this will validate the event address with google maps and turn it into a link if it is a valid address
		$("label[for='address']").each(function(){
			if(this.innerHTML == "") return;
			validateAddress(this);
		});
		
		function validateAddress(addressHolder){
			var geocoder = new google.maps.Geocoder(); //create the google geocoder object
			geocoder.geocode({ 'address': addressHolder.innerHTML }, function (results, status, validated) {
				if (status == google.maps.GeocoderStatus.OK) { // Google reported a valid geocoded address
					if(results.length <= 3) addressHolder.innerHTML = "<a href='http://mapof.it/" + addressHolder.innerHTML + "' target='_blank'>" + addressHolder.innerHTML + "</a>"; //there was an exact match for the search
				}
			});
		}
</script>
<? }?>
<script language="javascript" src="scrt.js" type="text/javascript"></script>
<?php require 'analytics_js.php'; ?>