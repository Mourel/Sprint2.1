const objecte1 = {
  forma: "rectangular",
  color: "vermell",
  tipus: "llibreta",
};

const objecte2 = { ...objecte1 };
objecte2.color = "groc";

console.log({ objecte1 });
console.log({ objecte2 });
