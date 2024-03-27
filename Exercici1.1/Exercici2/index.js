let randomNumber = () =>
  (document.getElementById("result").innerHTML =
    "El número aleatori escollit és el " + Math.random() * 100 + ".");

randomNumber();
