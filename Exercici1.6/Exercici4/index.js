let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (let property in obj) {
  console.log(`${property}: ${obj[property]}`);
}
