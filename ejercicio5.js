while (true) {
    const dniInput = prompt("Introduce el número del DNI (0 - 99999999):");

    if (dniInput === null) {
        break;
    }

    const dni = parseInt(dniInput);

    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
        const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letra = letrasDNI.charAt(dni % 23);

        alert("La letra del DNI " + dni + " es: " + letra);
    } else {
        alert("No es un número de DNI válido. Introduce un número válido.");
    }
}