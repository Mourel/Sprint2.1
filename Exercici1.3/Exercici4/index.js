function processarElements(array, callback) {
  callback(array);
}

const noms = ["macarena", "ricard", "linda", "néstor"];

processarElements(noms, function (array) {
  document.getElementById("result").innerHTML = array;
});
