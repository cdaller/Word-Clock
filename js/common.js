/** 
 * Common functions for word clock
 */

// the array that stores the css classes for every minute
var minutes = new Array();

/* initialize the watch and the recurring call to update it */
function initWatch() {
	//$('body').fadeOut(0);
	$(window).resize(function(){
		customAlign('#mainclock', 'center', 'center');
	});
	$('#hide').load('css/clock/black.css');
	$('#hide').load('css/clock/red.css');
	$('#hide').load('css/clock/white.css');
  
  // default watch is DeLarge
  initDeLarge();
  
  var style = 'black'; // default
	if ($.cookie('style') != null) {
		style = $.cookie('style');
	}
	fancySwitchStylesheet(style);
	updateWordClock();
	updateWatchClock();
	// update the words every minute, if necessary
	setInterval("updateWordClock()", 20000); 
	setInterval("updateWatchClock()", 500);
}

/* Update the word clock using css classes */
function updateWordClock() {
	$('.highlight').removeClass('highlight');
	$('.highlightthese').removeClass('highlightthese');
	var currDate = new Date();
	var hour = currDate.getHours();
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
	
	// $.getScript( filename )
	//   .done(function( script, textStatus ) {
	//     console.log( textStatus );
	// 	  // create table
	// 	  addDataToTable('mainclock'); 
	// 		updateWordClock();
	// 	})
	// 	.fail(function( jqxhr, settings, exception ) {
	//     console.log( exception );
	//   });
}