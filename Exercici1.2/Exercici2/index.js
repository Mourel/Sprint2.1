function numeros() {
  let num1 = 5;
  let num2 = 4;
  let numeros = num1 > num2 ? "num1 és més gran" : "num2 és més gran";
  document.getElementById("result").innerHTML = numeros;
}

numeros();
