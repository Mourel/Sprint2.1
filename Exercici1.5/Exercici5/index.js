const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const suma = array
  .filter((num) => num >= 10)
  .map((num) => num * 2)
  .reduce((acc, curr) => acc + curr, 0);

document.getElementById("result").innerHTML =
  "El resultat de la suma és: " + suma;
