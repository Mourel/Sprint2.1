function potConduir() {
  let age = document.getElementById("age").value;
  let conduir = age < 18 ? "No pots conduir." : "Pots conduir.";
  document.getElementById("result").innerHTML = conduir;
}
