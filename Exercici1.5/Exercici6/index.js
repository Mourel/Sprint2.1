const numeros = [11, 12, 13, 14];

document.getElementById("result").innerHTML =
  numeros.every(revisar) || numeros.some(revisar);

function revisar(numero) {
  return numero > 10;
}
