/**
 * Start clock
 */
function initClock() {
	// init
	renderClock();

	// run every second
	setInterval(renderClock, 1000);
}

/**
 * Render clock
 */
function renderClock() {
	// get HTML elements
	var clock = document.getElementById('time');
	var date  = document.getElementById('date');

	// time logic
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	// display time
	clock.innerHTML = time['hours'] + sep +  time['minutes'];

	// display date
	date.innerHTML = time['day'] + ' ' +  getCurrentMonth(time['month']) + ' ' + time['year'];
}

/**
 * Flash seperator 
 * @param integer - seconds
 * @return string
 */
function flashSeperator(seconds) {
	var sepClass = '';

	// toggle class
	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}

/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	// fill array
	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes();
	time['hours'] = date.getHours();
	time['month'] = date.getMonth();
	time['year'] = date.getFullYear();
	time['day'] = date.getDay();

	// hours: add leading zero
	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	// minutes: add leading zero
	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	return time;
}

/**
 * Get current Month
 * @param integer - month number
 * @return string
 */
function getCurrentMonth(monthNumber) {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return months[monthNumber];
}

function content() {
	var background = document.getElementsByTagName('body');
      	var currentTime = new Date().getHours();
	
//	night
	if (0 <= currentTime && currentTime < 5){
      		document.body.style.backgroundColor = "#1A0957"; //in case the gradient stops working
		document.body.style.backgroundImage = "linear-gradient(to right, #1A0957, #1A3187)"; //gradient background
		document.getElementById('cloud').style.backgroundImage = "url(img/night.png)"; //night clouds
		document.getElementById('stars').style.opacity = "100%";
		document.getElementById('moonsun').style.margin = "0 auto"; //moon to center
		document.getElementById('moonsun').style.background = "none"; //gets rid of the sun that shapes the moon
		document.getElementById('date').style.color = "#606BD4"//color date
	}

//	morning
	if (5 <= currentTime && currentTime < 11){
      		document.body.style.backgroundColor = "#f6d365"; //in case the gradient stops working
		document.body.style.backgroundImage = "linear-gradient(to right, #f6d365 0%, #fda085 100%)"; //gradient background
		document.getElementById('cloud').style.backgroundImage = "url(img/morning.png)"; //morning clouds
		document.getElementById('stars').style.opacity = "0"; //hide stars
		document.getElementById('moonsun').style.boxShadow = "none"; //remove moon
		document.getElementById('moonsun').style.margin = "0 20% 0 80%"; //sun to the right
		document.getElementById('date').style.color = "#FFDCAC"//color date

	}
	
//	afternoon
	if (11 <= currentTime && currentTime < 17){
		document.body.style.backgroundColor = "#2980B9"; //in case the gradient stops working
		document.body.style.backgroundImage = "linear-gradient(to right, #6DD5FA, #2980B9)"; //gradient background
		document.getElementById('cloud').style.backgroundImage = "url(img/afternoon.png)"; //afternoon clouds
		document.getElementById('stars').style.opacity = "0"; //hide stars
		document.getElementById('moonsun').style.boxShadow = "none"; //remove moon
		document.getElementById('moonsun').style.margin = "0 auto"; //sun in the middle
		document.getElementById('date').style.color = "#CAE2FF"//color date
	}
	
//	evening
	if (17 <= currentTime && currentTime < 23){
      		document.body.style.backgroundColor = "#FF8030"; //in case the gradient stops working
		document.body.style.backgroundImage = "linear-gradient(to right, #FF8030, #FA709A)"; //gradient background
		document.getElementById('cloud').style.backgroundImage = "url(img/evening.png)";
		document.getElementById('moonsun').style.borderRadius = "15px 15px 0 0 #f9d71c"; //shaping the moon
		document.getElementById('moonsun').style.margin = "0 30% 0 70%"; //moon to the right
		document.getElementById('moonsun').style.background = "none"; //remove sun
		document.getElementById('date').style.color = "#FCC9C9"//color date

	}
	
//	night
	if (23 <= currentTime && currentTime < 24){
      		document.body.style.backgroundColor = "#1A3187"; //in case the gradient stops working
		document.body.style.backgroundImage = "linear-gradient(to right, #1A3187, #1A0957)"; //gradient background
		document.getElementById('cloud').style.backgroundImage = "url(img/night.png)";
		document.getElementById('stars').style.opacity = "100%"; //stars are fully visible
		document.getElementById('moonsun').style.margin = "0 auto"; //moon to center
		document.getElementById('moonsun').style.background = "none"; //remove sun
		document.getElementById('date').style.color = "#606BD4"//color date
	}
}

function mediaQuery(mqTablet, mqDesktop, mqBigDesktop){
	if (mqTablet.matches) {
    		// window width is greater than 560px
		document.getElementById('house').style.left = "10%"	
	}
	
	if (mqDesktop.matches) {
		document.getElementById('house').style.left = "20%"
	}

	if (mqBigDesktop.matches) {
		document.getElementById('house').style.left = "25%"
	}
	
	else {
    		// window width is less than 560px
	}
}

//media queries
var mqTablet = window.matchMedia( "(min-width: 560px)" ); //tablet
var mqDesktop = window.matchMedia( "(min-width: 736px)" );//desktop
var mqBigDekstop = window.matchMedia( "(min-width: 980px)" );//big dekstop


// start
initClock();
content();
mediaQuery(mqTablet, mqDesktop, mqBigDekstop);