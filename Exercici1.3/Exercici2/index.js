function suma(something) {
  document.getElementById("result").innerHTML = something;
}

function calculadora(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

calculadora(6, 3, suma);
