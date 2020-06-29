//Clock from XTchallenge 2

function initClock() {
	// init
	renderClock();

	// run every second
	setInterval(renderClock, 1000);
}

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

function flashSeperator(seconds) {
	var sepClass = '';

	// toggle class
	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}

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

function getCurrentMonth(monthNumber) {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return months[monthNumber];
}

initClock();
