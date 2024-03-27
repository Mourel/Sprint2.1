function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 2000);
  });
}

async function asyncCall() {
  try {
    let result = await resolveAfter2Seconds();
    console.log(result);
  } catch (error) {
    console.error(`S'ha produït un error:`, error);
  }
}

asyncCall();
