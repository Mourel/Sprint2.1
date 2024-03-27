const objecte1 = {
  forma: "rectangular",
  color: "vermell",
  tipus: "llibreta",
};

const objecte2 = {
  material: "paper",
  pes: "300g",
  mida: "22x25cm",
};

const objecte3 = { ...objecte1, ...objecte2 };

console.log({ objecte3 });
