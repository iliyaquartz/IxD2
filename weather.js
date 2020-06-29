var api = "https://api.openweathermap.org/data/2.5/weather?";
var key = "&appid=84240591dd883c11a85c2cf241f7a7c0";
var la = "q=Los Angeles";

function weather() {
	var url = api + la + key;
	fetch(url)
	.then(function(response) { return response.json();})
		
	.then(function(response) {
		var celsius = response.main.temp - 273.15;
		var temp = celsius.toFixed(0);
			
		var icon = response.weather[0].icon;
		var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
			
		document.getElementById("weather").innerHTML +=  '<h3 class="weathertitle">' + temp + ' ' + '&#176;C'+ '<br>' + '</h2>' + '<img class="weathericon" src=" ' + iconurl + '">' ;
		});
}

weather();