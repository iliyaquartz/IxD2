function initMap() {
	var miami = {lat: 35.2702896, lng: -116.9325475};
	var map = new google.maps.Map(
      		document.getElementById('map'), {zoom: 7, center: miami});
  	
	var circle = new google.maps.Circle({
            	strokeColor: '#FF0000',
            	strokeOpacity: 0.8,
            	strokeWeight: 2,
            	fillColor: '#FF0000',
            	fillOpacity: 0.35,
            	map: map,
		center: miami,
		radius: 10000
	});
		
}