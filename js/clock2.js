function updateWordClock() {
	$('.highlight').removeClass('highlight');
	$('.highlightthese').removeClass('highlightthese');
	var currDate = new Date();
	var hour = currDate.getHours();
	var minute = currDate.getMinutes();
	var second = currDate.getSeconds();
	var amPm = "am";
	if (hour > 12) {
		if (hour > 20) {
			amPm = "night";
		} else {
			amPm = "pm";
		}
		hour -= 12;
	}
	var numToHour = ['one','two','three','four','five','six',
	'seven','eight','nine','ten','eleven','twelve','one'];
	if (hour == 0) {
		var hr_index = 11;
	}	else {
		var hr_index = hour - 1;
	}

  // define the classes to highlight	
	var classes = minutes[minute];
	classes = classes.replace("hourPlusOne", numToHour[hr_index + 1]);
	classes = classes.replace("hour", numToHour[hr_index]);
	var to_highlight = classes.split(" ");
	to_highlight.push('oclock');
	to_highlight.push(amPm);

	// find all elements with classes in to_highlight and add "highlight" as class:
	var i = 0;
	while (i < to_highlight.length) {
		$('.'+to_highlight[i]).addClass('highlightthese');
		i += 1;
	}
	$('.highlightthese').addClass('highlight'); /* this way everything highlights at once */
	
}