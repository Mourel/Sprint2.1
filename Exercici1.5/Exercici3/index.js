const numeros = [1, 10, 8, 11];

document.getElementById("result").innerHTML =
  "El primer número major a 10 és el " + numeros.find(verificar);

function verificar(numero) {
  return numero > 10;
}
