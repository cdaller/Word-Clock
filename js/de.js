var minutes = new Array(60);
minutes[00] = "es ist hour";
minutes[01] = "es war gerade hour";
minutes[02] = "es war gerade hour";
minutes[03] = "es ist gleich fuenf nach hour";
minutes[04] = "es ist gleich fuenf nach hour";
minutes[05] = "es ist fuenf nach hour";
minutes[06] = "es war gerade fuenf nach hour";
minutes[07] = "es war gerade fuenf nach hour";
minutes[08] = "es ist gleich zehn nach hour";
minutes[09] = "es war gerade fuenf nach hour";
minutes[10] = "es ist zehn nach hour";
minutes[11] = "es war gerade zehn nach hour";
minutes[12] = "es war gerade zehn nach hour";
minutes[13] = "es ist gleich viertel nach hour";
//minutes[13] = "es ist gleich viertel hourPlusOne";
minutes[14] = "es war gerade zehn nach hour";
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

function addDataToTable(tableId) {
  tabBody = document.getElementById(tableId),
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
			createColumn("three", "D"),
			createColumn("three", "R"),
			createColumn("three", "E"),
			createColumn("three", "I"),
			createColumn("", "N"),
			createColumn("seven", "S"),
			createColumn("seven", "I"),
			createColumn("seven", "E"),
			createColumn("seven", "B"),
			createColumn("seven", "E"),
			createColumn("seven", "N"),
			createColumn("", "T")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("eleven", "E"),
			createColumn("eleven", "L"),
			createColumn("eleven five", "F"),
			createColumn("five", "Ü"),
			createColumn("five", "N"),
			createColumn("five", "F"),
			createColumn("", "J"),
			createColumn("twelve", "Z"),
			createColumn("twelve", "W"),
			createColumn("twelve", "Ö"),
			createColumn("twelve", "L"),
			createColumn("twelve", "F")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("four", "V"),
			createColumn("four", "I"),
			createColumn("four", "E"),
			createColumn("four", "R"),
			createColumn("four", "Z"),
			createColumn("", "W"),
			createColumn("", "E"),
			createColumn("", "I"),
			createColumn("eight", "A"),
			createColumn("eight", "C"),
			createColumn("eight", "H"),
			createColumn("eight", "T")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("", "M"),
			createColumn("nine", "N"),
			createColumn("nine", "E"),
			createColumn("nine", "U"),
			createColumn("nine", "N"),
			createColumn("", "G"),
			createColumn("six", "S"),
			createColumn("six", "E"),
			createColumn("six", "C"),
			createColumn("six", "H"),
			createColumn("six", "S"),
			createColumn("", "Y")
		)
	);
  addRow(tabBody,
		new Array(
			createColumn("ten", "Z"),
			createColumn("ten", "E"),
			createColumn("ten", "H"),
			createColumn("ten", "N"),
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
