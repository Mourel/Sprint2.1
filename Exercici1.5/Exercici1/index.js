const numeros = [1, 2, 3, 4];

const quadrats = numeros.map((numero) => numero * numero);

document.getElementById("result").innerHTML = "Nova array: " + quadrats;
