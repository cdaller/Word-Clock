function center(selector, boolHoriz, boolVert) {
	cssProperties = {position:'absolute'};
	if (boolHoriz) {
		cssProperties.left = ($(window).width() - $(selector).outerWidth())/2;
	}
	if (boolVert) {
		cssProperties.top = ($(window).height() - $(selector).outerHeight())/2;
	}
	$(selector).css(cssProperties);
}

function customAlign(selector, vert, horiz) {
	/*
	Possible values and their effects:
	vert: 	'top', 'center', 'bottom', 'ignore'
	horiz: 	'left', 'center', 'right', 'ignore'
	Example: 
		align('#some_id', 'top', 'left'):	Aligns to the top left corner
	*/
	cssProperties = {position:'absolute'};
	switch(vert) {
		case 'top':
			cssProperties.top = 0;
			break;
		case 'center':
			cssProperties.top = ($(window).height() - $(selector).outerHeight())/2;
			break;
		case 'bottom':
			cssProperties.bottom = 0;
			break;
		case 'ignore':
			break;
	}
	switch(horiz) {
		case 'left':
			cssProperties.left = 0;
			break;
		case 'center':
			cssProperties.left = ($(window).width() - $(selector).outerWidth())/2;
			break;
		case 'right':
			cssProperties.right = 0;
			break;
		case 'ignore':
			break;
	}
	$(selector).css(cssProperties)
}

/*
to call on resize:
$(window).resize(function(){
	center(selector, boolHoriz, boolVert);
});
*/

// code partially from http://tutorialzine.com/2010/03/centering-div-vertically-and-horizontally/