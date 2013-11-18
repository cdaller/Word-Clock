/* add link for this design to switch element */
$(function () {
  addSwitcherDeLarge();
});

function addSwitcherDeLarge() {	
  var switchElement = document.getElementById("switcherLanguage");
  var aTag = document.createElement('a');
  aTag.setAttribute('href', "#");
  aTag.setAttribute('onclick', "initDeLarge(); return false;");
  aTag.innerHTML = "Deutsch Gross";
	var myDiv = document.createElement('div');
  myDiv.appendChild(aTag);
	switchElement.appendChild(myDiv);
}

/* minutes definitions */
function initDeLarge() {
	minutes = new Array();
minutes[00] = "es ist hour";
minutes[01] = "es war gerade hour";
minutes[02] = "es war gerade hour";
minutes[03] = "es ist gleich fuenf nach hour";
minutes[04] = "es ist gleich fuenf nach hour";
minutes[05] = "es ist fuenf nach hour";
minutes[06] = "es war gerade fuenf nach hour";
minutes[07] = "es war gerade fuenf nach hour";
minutes[08] = "es ist gleich zehn nach hour";
minutes[09] = "es ist gleich zehn nach hour";
minutes[10] = "es ist zehn nach hour";
minutes[11] = "es war gerade zehn nach hour";
minutes[12] = "es war gerade zehn nach hour";
minutes[13] = "es ist gleich viertel nach hour";
//minutes[13] = "es ist gleich viertel hourPlusOne";
minutes[14] = "es ist gleich viertel nach hour";
minutes[15] = "es ist viertel nach hour";
//minutes[15] = "es ist viertel hourPlusOne";
minutes[16] = "es war gerade viertel nach hour";
minutes[17] = "es war gerade viertel nach hour";
minutes[18] = "es ist gleich zwanzig nach hour";
minutes[19] = "es ist gleich zwanzig nach hour";
minutes[20] = "es ist zwanzig nach hour";
minutes[21] = "es war gerade zwanzig nach hour";
minutes[22] = "es war gerade zwanzig nach hour";
minutes[23] = "es ist gleich fuenf vor halb hourPlusOne";
minutes[24] = "es ist gleich fuenf vor halb hourPlusOne";
minutes[25] = "es ist fuenf vor halb hourPlusOne";
minutes[26] = "es war gerade fuenf vor halb hourPlusOne";
minutes[27] = "es war gerade fuenf vor halb hourPlusOne";
minutes[28] = "es ist gleich halb hourPlusOne";
minutes[29] = "es ist gleich halb hourPlusOne";
minutes[30] = "es ist halb hourPlusOne";
minutes[31] = "es war gerade halb hourPlusOne";
minutes[32] = "es war gerade halb hourPlusOne";
minutes[33] = "es ist gleich fuenf nach halb hourPlusOne";
minutes[34] = "es ist gleich fuenf nach halb hourPlusOne";
minutes[35] = "es ist fuenf nach halb hourPlusOne";
minutes[36] = "es war gerade fuenf nach halb hourPlusOne";
minutes[37] = "es war gerade fuenf nach halb hourPlusOne";
minutes[38] = "es ist gleich zehn nach halb hourPlusOne";
minutes[39] = "es ist gleich zehn nach halb hourPlusOne";
minutes[40] = "es ist zehn nach halb hourPlusOne";
minutes[41] = "es war gerade zehn nach halb hourPlusOne";
minutes[42] = "es war gerade zehn nach halb hourPlusOne";
minutes[43] = "es ist gleich dreiviertel hourPlusOne";
minutes[44] = "es ist gleich dreiviertel hourPlusOne";
minutes[45] = "es ist drei viertel hourPlusOne";
minutes[46] = "es war gerade drei viertel hourPlusOne";
minutes[47] = "es war gerade drei viertel hourPlusOne";
minutes[48] = "es ist gleich zehn vor hourPlusOne";
minutes[49] = "es ist gleich zehn vor hourPlusOne";
minutes[50] = "es ist zehn vor hourPlusOne";
minutes[51] = "es war gerade zehn vor hourPlusOne";
minutes[52] = "es war gerade zehn vor hourPlusOne";
minutes[53] = "es ist gleich fuenf vor hourPlusOne";
minutes[54] = "es ist gleich fuenf vor hourPlusOne";
minutes[55] = "es ist fuenf vor hourPlusOne";
minutes[56] = "es war gerade fuenf vor hourPlusOne";
minutes[57] = "es war gerade fuenf vor hourPlusOne";
minutes[58] = "es ist gleich hourPlusOne";
minutes[59] = "es ist gleich hourPlusOne";

hours = new Array();

addDataToTableDeLarge('mainclock');
updateWordClock();
}

/* add table data for word clock using methods from table.js */
function addDataToTableDeLarge(tableId) {
  tabBody = document.getElementById(tableId);
	tabBody.innerHTML = "";
  addRow(tabBody,
		new Array(
			createColumn("es", "E"),
			createColumn("es", "S"),
			createColumn("", "L"),
			createColumn("war", "W"),
			createColumn("war", "A"),
			createColumn("war", "R"),
			createColumn("ist", "I"),
			createColumn("ist", "S"),
			createColumn("ist", "T"),
			createColumn("", "O"),
			createColumn("", "X"),
			createColumn("", "E")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("gleich", "G"),
			createColumn("gleich", "L"),
			createColumn("gleich", "E"),
			createColumn("gleich", "I"),
			createColumn("gleich", "C"),
			createColumn("gleich", "H"),
			createColumn("", "S"),
			createColumn("genau", "G"),
			createColumn("genau", "E"),
			createColumn("genau", "N"),
			createColumn("genau", "A"),
			createColumn("genau", "U")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("gerade", "G"),
			createColumn("gerade", "E"),
			createColumn("gerade", "R"),
			createColumn("gerade", "A"),
			createColumn("gerade", "D"),
			createColumn("gerade", "E"),
			createColumn("", "H"),
			createColumn("fuenf", "F"),
			createColumn("fuenf", "Ü"),
			createColumn("fuenf", "N"),
			createColumn("fuenf", "F"),
			createColumn("", "K")
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
			createColumn("viertel", "L"),
			createColumn("", "Q")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("zehn", "Z"),
			createColumn("zehn", "E"),
			createColumn("zehn", "H"),
			createColumn("zehn", "N"),
			createColumn("", "P"),
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
			createColumn("nach", "N"),
			createColumn("nach", "A"),
			createColumn("nach", "C"),
			createColumn("nach", "H"),
			createColumn("vor", "V"),
			createColumn("vor", "O"),
			createColumn("vor", "R"),
			createColumn("", "G"),
			createColumn("halb", "H"),
			createColumn("halb", "A"),
			createColumn("halb", "L"),
			createColumn("halb", "B")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("threeHour", "D"),
			createColumn("threeHour", "R"),
			createColumn("threeHour oneHour", "E"),
			createColumn("threeHour oneHour", "I"),
			createColumn("oneHour", "N"),
			createColumn("sevenHour", "S"),
			createColumn("sevenHour", "I"),
			createColumn("sevenHour", "E"),
			createColumn("sevenHour", "B"),
			createColumn("sevenHour", "E"),
			createColumn("sevenHour", "N"),
			createColumn("", "T")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("elevenHour", "E"),
			createColumn("elevenHour", "L"),
			createColumn("elevenHour fiveHour", "F"),
			createColumn("fiveHour", "Ü"),
			createColumn("fiveHour", "N"),
			createColumn("fiveHour", "F"),
			createColumn("", "J"),
			createColumn("twelveHour", "Z"),
			createColumn("twelveHour", "W"),
			createColumn("twelveHour", "Ö"),
			createColumn("twelveHour", "L"),
			createColumn("twelveHour", "F")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("fourHour", "V"),
			createColumn("fourHour", "I"),
			createColumn("fourHour", "E"),
			createColumn("fourHour", "R"),
			createColumn("fourHour twoHour", "Z"),
			createColumn("twoHour", "W"),
			createColumn("twoHour", "E"),
			createColumn("twoHour", "I"),
			createColumn("eightHour", "A"),
			createColumn("eightHour", "C"),
			createColumn("eightHour", "H"),
			createColumn("eightHour", "T")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("", "M"),
			createColumn("nineHour", "N"),
			createColumn("nineHour", "E"),
			createColumn("nineHour", "U"),
			createColumn("nineHour", "N"),
			createColumn("", "G"),
			createColumn("sixHour", "S"),
			createColumn("sixHour", "E"),
			createColumn("sixHour", "C"),
			createColumn("sixHour", "H"),
			createColumn("sixHour", "S"),
			createColumn("", "Y")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("tenHour", "Z"),
			createColumn("tenHour", "E"),
			createColumn("tenHour", "H"),
			createColumn("tenHour", "N"),
			createColumn("", "F"),
			createColumn("oclock", "U"),
			createColumn("oclock", "H"),
			createColumn("oclock", "R"),
			createColumn("", "Ä"),
			createColumn("am", "V"),
			createColumn("am", "O"),
			createColumn("am", "R")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("pm night", "N"),
			createColumn("pm night", "A"),
			createColumn("pm night", "C"),
			createColumn("pm night", "H"),
			createColumn("night", "T"),
			createColumn("night", "S"),
			createColumn("am pm", "M"),
			createColumn("am pm", "I"),
			createColumn("am pm", "T"),
			createColumn("am pm", "T"),
			createColumn("am pm", "A"),
			createColumn("am pm", "G")
		)
	);
}
