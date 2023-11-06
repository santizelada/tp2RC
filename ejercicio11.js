let names = [];
let ages = [];

for (let i = 1; i <= 3; i++) {
    const name = prompt("Introduce el nombre " + i + ":");
    const ageInput = prompt("Introduce la edad " + i + ":");
    const age = parseInt(ageInput);

    if (!isNaN(age) && age >= 0) {
        names.push(name);
        ages.push(age);
    } else {
        alert("La edad no es válida. Ingresa una edad válida.");
        i--; 
    }
}

const maxAge = Math.max(...ages);
const index = ages.indexOf(maxAge);
const oldestName = names[index];

alert("La persona mayor es: " + oldestName);
