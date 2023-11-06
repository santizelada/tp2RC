const texto = prompt("Introduce una cadena de texto:");
let textoConGuiones = "";

for (let i = 0; i < texto.length; i++) {
    if (i > 0) {
        textoConGuiones += "-";
    }
    textoConGuiones += texto[i];
}

alert("Texto con guiones: " + textoConGuiones)
