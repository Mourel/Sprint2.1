function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 2000);
  });
}

resolveAfter2Seconds().then((result) => {
  console.log(result);
});
