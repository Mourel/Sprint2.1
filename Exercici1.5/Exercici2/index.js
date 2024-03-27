const numeros = [1, 2, 3, 4];

const numerosParells = numeros.filter((num) => num % 2 === 0);

document.getElementById("result").innerHTML =
  "Els números parells són: " + numerosParells;
