function esperarISaludar(nom, callback) {
  setTimeout(function () {
    callback(nom);
  }, 2000);
}

const nom = "Pepe";

esperarISaludar(nom, function (nom) {
  document.getElementById("result").innerHTML = nom;
});
