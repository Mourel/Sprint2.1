function suma(...args) {
  let suma = 0;
  for (let arg of args) suma += arg;
  return suma;
}

let x = suma(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(x);
