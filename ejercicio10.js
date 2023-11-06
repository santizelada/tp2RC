const numRows = prompt("Introduce el número de filas:");
const numCols = prompt("Introduce el número de columnas:");

if (!isNaN(numRows) && !isNaN(numCols) && numRows > 0 && numCols > 0) {
    const totalCells = numRows * numCols;
    let currentNumber = totalCells;

    document.write("<table border='1'>");

    for (let i = 0; i < numRows; i++) {
        document.write("<tr>");

        for (let j = 0; j < numCols; j++) {
            document.write("<td>" + currentNumber + "</td>");
            currentNumber--;
        }

        document.write("</tr>");
    }

    document.write("</table>");
} else {
    alert("Por favor, ingresa un número de filas y columnas válidos.");
}
