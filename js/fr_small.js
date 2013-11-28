/* add link for this design to switch element */
$(function () {
  addSwitcherFrSmall();
});

function addSwitcherFrSmall() {	
  var switchElement = document.getElementById("switcherLanguage");
  var aTag = document.createElement('a');
  aTag.setAttribute('href', "#");
  aTag.setAttribute('onclick', "initFrSmall(); return false;");
  aTag.innerHTML = "Francais";
	var myDiv = document.createElement('div');
  myDiv.appendChild(aTag);
	switchElement.appendChild(myDiv);
}

/* minutes definitions */
function initFrSmall() {
	$("#mainclock").show();	
	$("#maincalendar").hide();

	minutes = new Array();
	minutes[00] = "il est hour";
	minutes[05] = "il est hour oclock et1 cinqu";
	minutes[10] = "il est hour oclock dix";
	minutes[15] = "il est hour oclock et1 quart";
	minutes[20] = "il est hour oclock vingt";
	minutes[25] = "il est hour oclock vingtcinqu";
	minutes[30] = "il est hour oclock et2 demi";
	minutes[35] = "il est hourPlusOne oclock moins vingtcinqu";
	minutes[40] = "il est hourPlusOne oclock moins vingt";
	minutes[45] = "il est hourPlusOne oclock moins le quart";
	minutes[50] = "il est hourPlusOne oclock moins dix";
	minutes[55] = "il est hourPlusOne oclock moins cinqu";
	
	hours = new Array();
	hours[00] = "minuit";
	hours[12] = "midi";

addDataToTableFrSmall('mainclock');
updateWordClock();
}

function addDataToTableFrSmall(tableId) {
  tabBody = document.getElementById(tableId);
	tabBody.innerHTML = "";
  addRow(tabBody,
		new Array(
      createColumn("il", "I"),
      createColumn("il", "L"),
      createColumn("", "N"),
      createColumn("est", "E"),
      createColumn("est", "S"),
      createColumn("est", "T"),
      createColumn("", "O"),
      createColumn("twoHour", "D"),
      createColumn("twoHour", "E"),
      createColumn("twoHour", "U"),
      createColumn("twoHour", "X")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("fourHour", "Q"),
      createColumn("fourHour", "U"),
      createColumn("fourHour", "A"),
      createColumn("fourHour", "T"),
      createColumn("fourHour", "R"),
      createColumn("fourHour", "E"),
      createColumn("threeHour", "T"),
      createColumn("threeHour", "R"),
      createColumn("threeHour", "O"),
      createColumn("threeHour", "I"),
      createColumn("threeHour", "S")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("nineHour", "N"),
      createColumn("nineHour", "E"),
      createColumn("nineHour", "U"),
      createColumn("nineHour", "F"),
      createColumn("oneHour", "U"),
      createColumn("oneHour", "N"),
      createColumn("oneHour", "E"),
      createColumn("sevenHour", "S"),
      createColumn("sevenHour", "E"),
      createColumn("sevenHour", "P"),
      createColumn("sevenHour", "T")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("eightHour", "H"),
      createColumn("eightHour", "U"),
      createColumn("eightHour", "I"),
      createColumn("eightHour", "T"),
      createColumn("sixHour", "S"),
      createColumn("sixHour", "I"),
      createColumn("sixHour", "X"),
      createColumn("fiveHour", "C"),
      createColumn("fiveHour", "I"),
      createColumn("fiveHour", "N"),
      createColumn("fiveHour", "Q")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("midi", "M"),
      createColumn("midi", "I"),
      createColumn("midi tenHour", "D"),
      createColumn("midi tenHour", "I"),
      createColumn("tenHour", "X"),
      createColumn("minuit", "M"),
      createColumn("minuit", "I"),
      createColumn("minuit", "N"),
      createColumn("minuit", "U"),
      createColumn("minuit", "I"),
      createColumn("minuit", "T")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("elevenHour", "O"),
      createColumn("elevenHour", "N"),
      createColumn("elevenHour", "Z"),
      createColumn("elevenHour", "E"),
      createColumn("", "R"),
      createColumn("oclock oclock_s", "H"),
      createColumn("oclock oclock_s", "E"),
      createColumn("oclock oclock_s", "U"),
      createColumn("oclock oclock_s", "R"),
      createColumn("oclock oclock_s", "E"),
      createColumn("oclock_s", "S")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("moins", "M"),
      createColumn("moins", "O"),
      createColumn("moins", "I"),
      createColumn("moins", "N"),
      createColumn("moins", "S"),
      createColumn("", "O"),
      createColumn("le", "L"),
      createColumn("le", "E"),
      createColumn("dix", "D"),
      createColumn("dix", "I"),
      createColumn("dix", "X")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("et1", "E"),
      createColumn("et1", "T"),
      createColumn("", "R"),
      createColumn("quart", "Q"),
      createColumn("quart", "U"),
      createColumn("quart", "A"),
      createColumn("quart", "R"),
      createColumn("quart", "T"),
      createColumn("", "P"),
      createColumn("", "M"),
      createColumn("", "D")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("vingt vingtcinqu", "V"),
      createColumn("vingt vingtcinqu", "I"),
      createColumn("vingt vingtcinqu", "N"),
      createColumn("vingt vingtcinqu", "G"),
      createColumn("vingt vingtcinqu", "T"),
      createColumn("vingtcinqu", "-"),
      createColumn("cinqu vingtcinqu", "C"),
      createColumn("cinqu vingtcinqu", "I"),
      createColumn("cinqu vingtcinqu", "N"),
      createColumn("cinqu vingtcinqu", "Q"),
      createColumn("cinqu vingtcinqu", "U")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("et2", "E"),
      createColumn("et2", "T"),
      createColumn("", "S"),
      createColumn("demi", "D"),
      createColumn("demi", "E"),
      createColumn("demi", "M"),
      createColumn("demi", "I"),
      createColumn("", "E"),
      createColumn("", "P"),
      createColumn("", "A"),
      createColumn("", "M")
		)
	);
}
