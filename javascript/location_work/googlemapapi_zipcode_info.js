$.get(
	'https://maps.googleapis.com/maps/api/timezone/json?location=' + visitorGeolocation.getField('latitude') + ',' + visitorGeolocation.getField('longitude') + '&timestamp=1988000000&key={your_googlemap_api}',
	function(result){
		console.log(result);
		/*
		
		{
		   "dstOffset" : 0,
		   "rawOffset" : 7200,
		   "status" : "OK",
		   "timeZoneId" : "Europe/Vilnius",
		   "timeZoneName" : "Eastern European Standard Time"
		}
		
		*/
	});