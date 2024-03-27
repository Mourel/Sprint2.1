function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Primera promesa resolta després de 2 segons");
    }, 2000);
  });
}

function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Segona promesa resolta després de 3 segons");
    }, 3000);
  });
}

async function asyncCall() {
  try {
    const [result1, result2] = await Promise.all([
      resolveAfter2Seconds(),
      resolveAfter3Seconds(),
    ]);
    console.log(result1);
    console.log(result2);
  } catch (error) {
    console.error(`S'ha produït un error:`, error);
  }
}

asyncCall();
