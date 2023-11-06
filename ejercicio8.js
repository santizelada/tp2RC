const userInput = prompt("Introduce un número (no mayor de 50):");
const number = parseInt(userInput);

if (!isNaN(number) && number > 0 && number <= 50) {
    for (let i = 1; i <= number; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += j;
        }

        console.log(row);
    }
} else {
    alert("Número no válido. Introduce un número válido entre 1 y 50.");
}

