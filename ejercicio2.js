
// Punto 2

while (true) {
    const input = prompt("Introduce una nota del 0 al 10:");

    if (input === null || input === "") {
        alert("Introduce un número válido.");
    } else {
        const grade = parseFloat(input);

        if (!isNaN(grade) && grade >= 0 && grade <= 10) {
            let finalGrade = "";

            if (grade >= 0 && grade <= 2) {
                finalGrade = "Muy deficiente";
            } else if (grade >= 3 && grade <= 4) {
                finalGrade = "Insuficiente";
            } else if (grade >= 5 && grade <= 6) {
                finalGrade = "Suficiente";
            } else if (grade === 7) {
                finalGrade = "Bien";
            } else if (grade >= 8 && grade <= 9) {
                finalGrade = "Notable";
            } else if (grade === 10) {
                finalGrade = "Sobresaliente";
            }

            alert(finalGrade);
            break;
        } else {
            alert("Número invalido");
        }
    }
}
