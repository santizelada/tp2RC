const texto = prompt("Introduce un texto:");
const primeraVocal = encontrarPrimeraVocal(texto);

if (primeraVocal !== -1) {
    alert("La vocal '" + texto[primeraVocal] + "' está en la posición " + primeraVocal);
} else {
    alert("No se encontraron vocales en el texto.");
}

function encontrarPrimeraVocal(str) {
    const vocales = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i])) {
            return i;
        }
    }
    return -1; 
}
