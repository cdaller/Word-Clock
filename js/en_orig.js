/* add link for this design to switch element */
$(function () {
  addSwitcherEnSmall();
});

function addSwitcherEnSmall() {	
  var switchElement = document.getElementById("switcherLanguage");
  var aTag = document.createElement('a');
  aTag.setAttribute('href', "#");
  aTag.setAttribute('onclick', "initEnSmall(); return false;");
  aTag.innerHTML = "English";
	var myDiv = document.createElement('div');
  myDiv.appendChild(aTag);
	switchElement.appendChild(myDiv);
}

/* minutes definitions */
function initEnSmall() {
	$("#mainclock").show();	
	$("#maincalendar").hide();

	minutes = new Array();
	minutes[00] = "it is hour";
	minutes[05] = "it is five past hour";
	minutes[10] = "it is ten past hour";
	minutes[15] = "it is a quarter past hour";
	minutes[20] = "it is twenty past hour";
	minutes[25] = "it is twentyfive past hour";
	minutes[30] = "it is half past hour";
	minutes[35] = "it is twentyfive to hourPlusOne";
	minutes[40] = "it is twenty to hourPlusOne";
	minutes[45] = "it is a quarter to hourPlusOne";
	minutes[50] = "it is ten to hourPlusOne";
	minutes[55] = "it is five to hourPlusOne";

	hours = new Array();

  addDataToTableEnSmall('mainclock');
	customAlign('#mainclock', 'center', 'center');
  updateWordClock();
}

function addDataToTableEnSmall(tableId) {
  tabBody = document.getElementById(tableId);
	tabBody.innerHTML = "";
  addRow(tabBody,
		new Array(
      createColumn("it", "I"),
      createColumn("it", "T"),
      createColumn("", "L"),
      createColumn("is", "I"),
      createColumn("is", "S"),
      createColumn("", "A"),
      createColumn("", "S"),
      createColumn("", "T"),
      createColumn("", "I"),
      createColumn("", "M"),
      createColumn("", "E")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("a", "A"),
      createColumn("", "C"),
      createColumn("quarter", "Q"),
      createColumn("quarter", "U"),
      createColumn("quarter", "A"),
      createColumn("quarter", "R"),
      createColumn("quarter", "T"),
      createColumn("quarter", "E"),
      createColumn("quarter", "R"),
      createColumn("", "D"),
      createColumn("", "C")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("twenty twentyfive", "T"),
      createColumn("twenty twentyfive", "W"),
      createColumn("twenty twentyfive", "E"),
      createColumn("twenty twentyfive", "N"),
      createColumn("twenty twentyfive", "T"),
      createColumn("twenty twentyfive", "Y"),
      createColumn("five twentyfive", "F"),
      createColumn("five twentyfive", "I"),
      createColumn("five twentyfive", "V"),
      createColumn("five twentyfive", "E"),
      createColumn("", "X")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("half", "H"),
      createColumn("half", "A"),
      createColumn("half", "L"),
      createColumn("half", "F"),
      createColumn("", "B"),
      createColumn("ten", "T"),
      createColumn("ten", "E"),
      createColumn("ten", "N"),
      createColumn("", "F"),
      createColumn("to", "T"),
      createColumn("to", "O")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("past", "P"),
      createColumn("past", "A"),
      createColumn("past", "S"),
      createColumn("past", "T"),
      createColumn("", "E"),
      createColumn("", "R"),
      createColumn("", "U"),
      createColumn("nineHour", "N"),
      createColumn("nineHour", "I"),
      createColumn("nineHour", "N"),
      createColumn("nineHour", "E")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("oneHour", "O"),
      createColumn("oneHour", "N"),
      createColumn("oneHour", "E"),
      createColumn("sixHour", "S"),
      createColumn("sixHour", "I"),
      createColumn("sixHour", "X"),
      createColumn("threeHour", "T"),
      createColumn("threeHour", "H"),
      createColumn("threeHour", "R"),
      createColumn("threeHour", "E"),
      createColumn("threeHour", "E")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("fourHour", "F"),
      createColumn("fourHour", "O"),
      createColumn("fourHour", "U"),
      createColumn("fourHour", "R"),
      createColumn("fiveHour", "F"),
      createColumn("fiveHour", "I"),
      createColumn("fiveHour", "V"),
      createColumn("fiveHour", "E"),
      createColumn("twoHour", "T"),
      createColumn("twoHour", "W"),
      createColumn("twoHour", "O")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("eightHour", "E"),
      createColumn("eightHour", "I"),
      createColumn("eightHour", "G"),
      createColumn("eightHour", "H"),
      createColumn("eightHour", "T"),
      createColumn("elevenHour", "E"),
      createColumn("elevenHour", "L"),
      createColumn("elevenHour", "E"),
      createColumn("elevenHour", "V"),
      createColumn("elevenHour", "E"),
      createColumn("elevenHour", "N")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("sevenHour", "S"),
      createColumn("sevenHour", "E"),
      createColumn("sevenHour", "V"),
      createColumn("sevenHour", "E"),
      createColumn("sevenHour", "N"),
      createColumn("twelveHour", "T"),
      createColumn("twelveHour", "W"),
      createColumn("twelveHour", "E"),
      createColumn("twelveHour", "L"),
      createColumn("twelveHour", "V"),
      createColumn("twelveHour", "E")
		)
	);
  addRow(tabBody,
		new Array(
      createColumn("tenHour", "T"),
      createColumn("tenHour", "E"),
      createColumn("tenHour", "N"),
      createColumn("", "S"),
      createColumn("", "E"),
      createColumn("oclock oclock_s", "O'"),
      createColumn("oclock oclock_s", "C"),
      createColumn("oclock oclock_s", "L"),
      createColumn("oclock oclock_s", "O"),
      createColumn("oclock oclock_s", "C"),
      createColumn("oclock oclock_s", "K")
		)
	);
}
