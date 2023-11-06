let sum = 0;

while (true) {
    const input = prompt("Introduce un número. Pulsa cancelar para cancelar la operación o para mostrar el resultado final. ");

    if (input === null) {
    }

    const number = parseFloat(input);

    if (!isNaN(number)) {
        sum += number;
    } else {
        alert("No es un número válido. Introduce un número válido.");
    }
}

alert("La suma total de los números introducidos es: " + sum);
