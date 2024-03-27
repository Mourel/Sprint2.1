const numeros = [13, 7, 8, 21];

const total = numeros.reduce((a, b) => a + b, 0);
document.getElementById("result").innerHTML = "La suma total és " + total;
