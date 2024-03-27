function checkInput() {
  const userInput = document.getElementById("userInput").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerText = "";

  function resolveAfter2Seconds(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === "Hola") {
          resolve("Enhorabona! Has escrit la paraula correcta.");
        } else {
          reject("Error. Torna a provar.");
        }
      }, 2000);
    });
  }

  resolveAfter2Seconds(userInput)
    .then((result) => {
      resultDiv.innerText = result;
    })
    .catch((error) => {
      resultDiv.innerText = error;
    });
}
