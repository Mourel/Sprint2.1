function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 2000);
  });
}

async function asyncCall() {
  const result = await resolveAfter2Seconds();
  document.getElementById("result").innerHTML = result;
}

asyncCall();
