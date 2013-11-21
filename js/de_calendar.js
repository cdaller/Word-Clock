/* add link for this design to switch element */
$(function () {
  addSwitcherDeCalendar();
});

function addSwitcherDeCalendar() {
  var switchElement = document.getElementById("switcherLanguage");
  var aTag = document.createElement('a');
  aTag.setAttribute('href', "#");
  aTag.setAttribute('onclick', "initDeCalendar(); return false;");
  aTag.innerHTML = "Deutsch Advent";
	var myDiv = document.createElement('div');
  myDiv.appendChild(aTag);
	switchElement.appendChild(myDiv);
}

/* minutes definitions */
function initDeCalendar() {
	$("#mainclock").hide();	
	$("#maincalendar").show();	
	addDataToTableDeCalendar('maincalendar');
	updateWordCalendar();
}

/* add table data for word clock using methods from table.js */
function addDataToTableDeCalendar(tableId) {
  tabBody = document.getElementById(tableId);
	tabBody.innerHTML = "";
  addRow(tabBody,
		new Array(
			createColumn("8 18", "A"),
			createColumn("12", "Z"),
			createColumn("12", "W"),
			createColumn("12", "Ö"),
			createColumn("12", "L"),
			createColumn("12", "F"),
			createColumn("9 19", "N")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("8 18", "C"),
			createColumn("6 7 16 17", "S"),
			createColumn("6 16", "E"),
			createColumn("6 16", "C"),
			createColumn("6 16", "H"),
			createColumn("6 16", "S"),
			createColumn("9 19", "E")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("8 18", "H"),
			createColumn("4 14 24", "V"),
			createColumn("4 7 14 17 24", "I"),
			createColumn("4 14 24", "E"),
			createColumn("4 14 24", "R"),
			createColumn("", "X"),
			createColumn("9 19", "U")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("8 18", "T"),
			createColumn("3 13 23", "D"),
			createColumn("3 13 23", "R"),
			createColumn("1 3 7 13 17 21 23", "E"),
			createColumn("1 3 13 21 23", "I"),
			createColumn("1 9 19 21", "N"),
			createColumn("1", "S")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("5 15", "F"),
			createColumn("5 15", "Ü"),
			createColumn("5 15", "N"),
			createColumn("5 15", "F"),
			createColumn("7 17", "B"),
			createColumn("", "E"),
			createColumn("", "C")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("11", "E"),
			createColumn("11", "L"),
			createColumn("11", "F"),
			createColumn("2 22", "Z"),
			createColumn("2 22", "W"),
			createColumn("2 7 22", "E"),
			createColumn("2 22", "I")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("21 22 23 24", "U"),
			createColumn("21 22 23 24", "N"),
			createColumn("21 22 23 24", "D"),
			createColumn("10 13 14 15 16 17 18 19", "Z"),
			createColumn("10 13 14 15 16 17 18 19", "E"),
			createColumn("10 13 14 15 16 17 18 19", "H"),
			createColumn("7 10 13 14 15 16 17 18 19", "N")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("20 21 22 23 24", "Z"),
			createColumn("20 21 22 23 24", "W"),
			createColumn("20 21 22 23 24", "A"),
			createColumn("20 21 22 23 24", "N"),
			createColumn("20 21 22 23 24", "Z"),
			createColumn("20 21 22 23 24", "I"),
			createColumn("20 21 22 23 24", "G")
		)
	);
}
