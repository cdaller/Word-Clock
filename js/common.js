/** 
 * Common functions for word clock
 */

// the array that stores the css classes for every minute
var minutes = new Array();
var hours = new Array();

/* initialize the watch and the recurring call to update it */
function initWatch(defaultInitFunction) {
	$('body').fadeOut(0);
	customAlign('#mainclock', 'center', 'center');
	customAlign('#maincalendar', 'center', 'center');
	$(window).resize(function(){
		customAlign('#mainclock', 'center', 'center');
		customAlign('#maincalendar', 'center', 'center');
	});
//	$('#hide').load('css/black.css');
//	$('#hide').load('css/red.css');
//	$('#hide').load('css/white.css');
  
  // load default watch (TODO: use cookie)
  defaultInitFunction();
  
  var style = 'black'; // default
	if ($.cookie('style') != null) {
		style = $.cookie('style');
	}
	fancySwitchStylesheet(style);
	updateWordClock();
	updateWordCalendar();
	updateWatchClock();
	// update the words every minute, if necessary
	setInterval("updateWordClock()", 60000); 
	setInterval("updateWordCalendar()", 60000); 
	setInterval("updateWatchClock()", 500);
}

/* Update the word clock using css classes */
function updateWordClock() {
	if ($('#mainclock').is(':hidden')) {
		return;
	}
	
	$('.highlight').removeClass('highlight');
	$('.highlightthese').removeClass('highlightthese');
	var currDate = new Date();
	var hour = currDate.getHours();
	var hour24 = hour;
	var minute = currDate.getMinutes();
	var second = currDate.getSeconds();
	var amPm = "am";
	if (hour < 5 || hour > 19) {
		amPm = "night";
	} else if (hour >= 12) {
		amPm = "pm";
	} 
	if (hour > 12) {
		hour -= 12;
	}
	var numToHour = ['oneHour','twoHour','threeHour','fourHour','fiveHour','sixHour',
	'sevenHour','eightHour','nineHour','tenHour','elevenHour','twelveHour','oneHour'];
	if (hour == 0) {
		var hr_index = 11;
	}	else {
		var hr_index = hour - 1;
	}

  // define the classes to highlight	
	var classes = null;
	// allow to have empty array values, search the next value below
	while (classes == null ) {
		classes = minutes[minute--];
	}
	classes = classes.replace("hourPlusOne", numToHour[hr_index + 1]);
	classes = classes.replace("hour", numToHour[hr_index]);
	var to_highlight = classes.split(" ");
	
	if (hours[hour24] != null) {
		// FIXXME: "minuit moins dix" does not work, as midnight is just set at 24, not at 23 oclock
		to_highlight.push(hours[hour24]);
	} else {
		if (hour == 1) {
			to_highlight.push('oclock');
		} else {
			to_highlight.push('oclock_s');			
		}
	}
	
	to_highlight.push(amPm);

	// find all elements with classes in to_highlight and add "highlight" as class:
	var i = 0;
	while (i < to_highlight.length) {
		$('.'+to_highlight[i]).addClass('highlightthese');
		i += 1;
	}
	$('.highlightthese').addClass('highlight'); /* this way everything highlights at once */	
}

/* Update the word clock using css classes */
function updateWordCalendar(selectedDay) {
	if ($('#maincalendar').is(':hidden')) {
		return;
	}
	$('.highlight').off(); // remove function
	$('.highlight').removeClass('highlight');
	$('.highlightthese').removeClass('highlightthese');
	var currDate = new Date();
	var month = currDate.getUTCMonth();
	var day;
	if (selectedDay == null) {
	  day = currDate.getUTCDate(); //currDate.getSeconds(); //
	} else {
		day = selectedDay;
	}
	var year = currDate.getUTCFullYear();
	
	var to_highlight = new Array();
	to_highlight.push(day.toString()); // day = classname
	
	// find all elements with classes in to_highlight and add "highlight" as class:
	var i = 0;
	while (i < to_highlight.length) {
		$('.' + to_highlight[i]).addClass('highlightthese');
		i += 1;
	}
	$('.highlightthese').addClass('highlight'); /* this way everything highlights at once */	
	
	// add advent feature (play audio file from advent directory), controles underneath calendar
	$('.highlight').click(function() {
		var pos = $('#maincalendar').position();
		var calHeight = $('#maincalendar').outerHeight();
		var yPos = pos.top + calHeight;
		$('.audio_player').css({
			position: "absolute",
			top: yPos + "px",
			left: pos.left + "px"
		});
		$('.audio_player').show();
		$('.audio_player_control').get(0).src = 'advent/' + day + '.mp3';
		$('.audio_player_control').get(0).play();
	}
  );
}


/* Update the small clock that shows the current time in numbers */
function updateWatchClock() {
	var currDate = new Date();
	var hour = currDate.getHours();
	var minute = currDate.getMinutes();
	var second = currDate.getSeconds();
	var second = second + '';
	var minute = minute + '';
	if (second.length == 1) {
		second = '0'+second;
	}
	if (minute.length == 1) {
		minute = '0'+minute;
	}
	$('#watch').html(hour+':'+minute+':'+second);
}

/* switch style sheets */
function fancySwitchStylesheet(color) {
	$.cookie('style',color);
	$('body').fadeOut(100);
	switchStylesheet(color);
	$('body').fadeIn(100);
	setTimeout(function(){$(window).resize();},50);
}

function switchStylesheet(color) {
	$('#mainStyle').attr("href", 'css/'+color + ".css");
	$(window).resize();
}

/* switch the layout/language of the word clock */
function fancySwitchLanguage(language) {
	var filename = "js/" + language + ".js";
	var fileref=document.createElement('script')
	fileref.setAttribute("type","text/javascript")
	fileref.setAttribute("src", filename)
	addDataToTable('mainclock'); 
	updateWordClock();	
}
