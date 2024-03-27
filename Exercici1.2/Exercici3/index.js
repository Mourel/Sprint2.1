// Expressió que determina si un número és positiu, negatiu o zero utilitzant operadors ternaris
const number = 10;
const sign = number > 0 ? "positiu" : number < 0 ? "negatiu" : "zero";
console.log(`El número ${number} és ${sign}.`);

// Funció que utilitza l'operador ternari per trobar el valor màxim entre tres nombres
function trobarMaxim(a, b, c) {
  const maxim = a > b ? (a > c ? a : c) : b > c ? b : c;
  return maxim;
}

const maxim = trobarMaxim(5, 9, 3);
console.log(`El valor màxim és: ${maxim}`);
