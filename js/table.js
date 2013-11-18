/**
 * Javascript that handes adding table rows/cells
 */

function addRow(tableElement, rows) {
	row = document.createElement("tr");
	for (var index = 0; index < rows.length; index++) {
		cell = document.createElement("td");
		cell.className = rows[index][0];
		textNode = document.createTextNode(rows[index][1])
		cell.appendChild(textNode);
		row.appendChild(cell);
	}
	tableElement.appendChild(row);
}

function createColumn(cssClass, letter) {
	return new Array(cssClass, letter);
}



//document.onload=addDataToTable();