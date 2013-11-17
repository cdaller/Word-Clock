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
