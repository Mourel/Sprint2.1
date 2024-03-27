function processarCadena(array, callback) {
  callback(array.map((nom) => nom.toUpperCase()));
}

const noms = ["macarena", "ricard", "linda", "néstor"];

processarCadena(noms, function (array) {
  document.getElementById("result").innerHTML = array;
});
