const texto = prompt("Introduce una cadena de texto:");
const textoAlReves = reverseString(texto);

alert("Texto al revés: " + textoAlReves);

function reverseString(str) {
    return str.split('').reverse().join('');
}
