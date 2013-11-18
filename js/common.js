function initWatch() {
	//$('body').fadeOut(0);
	$(window).resize(function(){
		customAlign('#mainclock', 'center', 'center');
	});
	$('#hide').load('css/clock/black.css');
	$('#hide').load('css/clock/red.css');
	$('#hide').load('css/clock/white.css');
  
  // create table
  addDataToTable('mainclock'); 
  
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