let concatenatedText = "";

while (true) {
    const input = prompt("Introduce una cadena de texto (o pulsa Cancelar para finalizar):");

    if (input === null) {
        break; 
    }

    concatenatedText += input + "-"; 

    alert("Texto actual: " + concatenatedText);
}

if (concatenatedText.length > 0) {
    concatenatedText = concatenatedText.slice(0, -1);
}

alert("Cadenas concatenadas: " + concatenatedText);