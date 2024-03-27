class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `Hola, ${this.name}.`;
  };
}

let person1 = new Person("Pepe");
person1.greet();
