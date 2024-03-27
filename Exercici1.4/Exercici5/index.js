const elements = (n1, n2, n3) => {
  return n1 + n2 + n3;
};

const numeros = [33, 35, 38];

console.log(elements(...numeros));
