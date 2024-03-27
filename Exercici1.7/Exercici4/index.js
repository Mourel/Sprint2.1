function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 2000);
  });
}

async function asyncCall() {
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
