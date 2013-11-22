/* add link for this design to switch element */
$(function () {
  addSwitcherDeSmall();
});

function addSwitcherDeSmall() {
  var switchElement = document.getElementById("switcherLanguage");
  var aTag = document.createElement('a');
  aTag.setAttribute('href', "#");
  aTag.setAttribute('onclick', "initDeSmall(); return false;");
  aTag.innerHTML = "Deutsch";
	var myDiv = document.createElement('div');
  myDiv.appendChild(aTag);
	switchElement.appendChild(myDiv);
}

/* minutes definitions */
function initDeSmall() {
	$("#mainclock").show();	
	$("#maincalendar").hide();
	
	minutes = new Array();
	minutes[00] = "es ist hour";
	minutes[05] = "es ist fuenf nach hour";
	minutes[10] = "es ist zehn nach hour";
	minutes[15] = "es ist viertel nach hour";
	//minutes[15] = "es ist viertel hourPlusOne";
	minutes[20] = "es ist zwanzig nach hour";
	minutes[25] = "es ist fuenf vor halb hourPlusOne";
	minutes[30] = "es ist halb hourPlusOne";
	minutes[35] = "es ist fuenf nach halb hourPlusOne";
	minutes[40] = "es ist zehn nach halb hourPlusOne";
	minutes[45] = "es ist drei viertel hourPlusOne";
	minutes[50] = "es ist zehn vor hourPlusOne";
	minutes[55] = "es ist fuenf vor hourPlusOne";

	hours = new Array();
  
	addDataToTableDeSmall('mainclock');
	updateWordClock();
}

/* add table data for word clock using methods from table.js */
function addDataToTableDeSmall(tableId) {
  tabBody = document.getElementById(tableId);
	tabBody.innerHTML = "";
  addRow(tabBody,
		new Array(
			createColumn("es", "E"),
			createColumn("es", "S"),
			createColumn("", "K"),
			createColumn("ist", "I"),
			createColumn("ist", "S"),
			createColumn("ist", "T"),
			createColumn("", "A"),
			createColumn("fuenf", "F"),
			createColumn("fuenf", "Ü"),
			createColumn("fuenf", "N"),
			createColumn("fuenf", "F")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("zehn", "Z"),
			createColumn("zehn", "E"),
			createColumn("zehn", "H"),
			createColumn("zehn", "N"),
			createColumn("zwanzig", "Z"),
			createColumn("zwanzig", "W"),
			createColumn("zwanzig", "A"),
			createColumn("zwanzig", "N"),
			createColumn("zwanzig", "Z"),
			createColumn("zwanzig", "I"),
			createColumn("zwanzig", "G")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("drei", "D"),
			createColumn("drei", "R"),
			createColumn("drei", "E"),
			createColumn("drei", "I"),
			createColumn("viertel", "V"),
			createColumn("viertel", "I"),
			createColumn("viertel", "E"),
			createColumn("viertel", "R"),
			createColumn("viertel", "T"),
			createColumn("viertel", "E"),
			createColumn("viertel", "L")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("vor", "V"),
			createColumn("vor", "O"),
			createColumn("vor", "R"),
			createColumn("", "F"),
			createColumn("", "U"),
			createColumn("", "N"),
			createColumn("", "K"),
			createColumn("nach", "N"),
			createColumn("nach", "A"),
			createColumn("nach", "C"),
			createColumn("nach", "H")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("halb", "H"),
			createColumn("halb", "A"),
			createColumn("halb", "L"),
			createColumn("halb", "B"),
			createColumn("", "A"),
			createColumn("elevenHour", "E"),
			createColumn("elevenHour", "L"),
			createColumn("elevenHour fiveHour", "F"),
			createColumn("fiveHour", "Ü"),
			createColumn("fiveHour", "N"),
			createColumn("fiveHour", "F")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("oneHour", "E"),
			createColumn("oneHour", "I"),
			createColumn("oneHour", "N"),
			createColumn("oneHour", "S"),
			createColumn("", "X"),
			createColumn("", "A"),
			createColumn("", "M"),
			createColumn("twoHour", "Z"),
			createColumn("twoHour", "W"),
			createColumn("twoHour", "E"),
			createColumn("twoHour", "I")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("threeHour", "D"),
			createColumn("threeHour", "R"),
			createColumn("threeHour", "E"),
			createColumn("threeHour", "I"),
			createColumn("", "P"),
			createColumn("", "M"),
			createColumn("", "J"),
			createColumn("fourHour", "V"),
			createColumn("fourHour", "I"),
			createColumn("fourHour", "E"),
			createColumn("fourHour", "R")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("sixHour", "S"),
			createColumn("sixHour", "E"),
			createColumn("sixHour", "C"),
			createColumn("sixHour", "H"),
			createColumn("sixHour", "S"),
			createColumn("", "N"),
			createColumn("", "L"),
			createColumn("eightHour", "A"),
			createColumn("eightHour", "C"),
			createColumn("eightHour", "H"),
			createColumn("eightHour", "T")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("sevenHour", "S"),
			createColumn("sevenHour", "I"),
			createColumn("sevenHour", "E"),
			createColumn("sevenHour", "B"),
			createColumn("sevenHour", "E"),
			createColumn("sevenHour", "N"),
			createColumn("twelveHour", "Z"),
			createColumn("twelveHour", "W"),
			createColumn("twelveHour", "Ö"),
			createColumn("twelveHour", "L"),
			createColumn("twelveHour", "F")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("tenHour", "Z"),
			createColumn("tenHour", "E"),
			createColumn("tenHour", "H"),
			createColumn("tenHour nineHour", "N"),
			createColumn("nineHour", "E"),
			createColumn("nineHour", "U"),
			createColumn("nineHour", "N"),
			createColumn("", "K"),
			createColumn("", "U"),
			createColumn("", "H"),
			createColumn("", "R")
		)
	);
}
