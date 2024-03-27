function parOImpar(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const message = numbers[i] % 2 === 0 ? "parell" : "imparell";
    console.log(`${numbers[i]} és ${message}`);
  }
}

const numbers = [1, 2, 3, 4, 5, 6];
parOImpar(numbers);
