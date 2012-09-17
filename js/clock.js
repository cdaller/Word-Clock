function updateWordClock() {
	$('.highlightthese').removeClass('highlight');
	$('.highlightthese').removeClass('highlightthese');
	var currDate = new Date();
	var hour = currDate.getHours();
	var minute = currDate.getMinutes();
	var second = currDate.getSeconds();
	if (hour > 12) {
		hour -= 12;
	}
	if (second >= 30) {
		minute += 1;
	}
	var multiplier = Math.round((minute/5));
	var minutes = multiplier*5;
	var numToHour = ['one','two','three','four','five','six',
	'seven','eight','nine','ten','eleven','twelve','one'];
	if (hour == 0) {
		var hr_index = 11
	}
	else {
		var hr_index = hour-1
	}
	var to_highlight = []
	var min_index = minutes/5;
	if (min_index == 0) {
		to_highlight.push(numToHour[hr_index]);
		to_highlight.push('oclock');
	}
	else if (min_index == 12) {
		to_highlight.push(numToHour[hr_index+1]);
		to_hi0hlight.push('oclock');
	}
	else {
		(min_index > 6) ? to_highlight.push('to', numToHour[hr_index+1]) : to_highlight.push('past', numToHour[hr_index])
		if (min_index == 5 | min_index == 7) {
			to_highlight.push('twenty','fiveq')
		}
		else {
			numToMin = ['fiveq', 'tenq', 'quarter', 'twenty', 'ignore', 
			'half', 'ignore', 'twenty', 'quarter', 'tenq', 'fiveq']
			curr = numToMin[(min_index-1)];
			to_highlight.push(curr)
			if (curr == 'quarter') {
				to_highlight.push('a');
			}
		}
	}
	var i = 0;
	while (i < to_highlight.length) {
		$('.'+to_highlight[i]).addClass('highlightthese');
		i += 1;
	}
	$('.highlightthese').addClass('highlight'); /* this way everything highlights at once */
}

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
