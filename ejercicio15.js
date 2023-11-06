const texto = prompt("Introduce un texto:");
const textoEnMinusculas = texto.toLowerCase();
let contadorVocales = 0;

for (let i = 0; i < textoEnMinusculas.length; i++) {
    const caracter = textoEnMinusculas[i];
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contadorVocales++;
    }
}

alert("El número de vocales en el texto es: " + contadorVocales);
