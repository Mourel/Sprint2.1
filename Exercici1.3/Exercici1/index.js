function processar(nombre, callback) {
  callback(nombre);
}

function callbackFunc(numero) {
  console.log("El nombre rebut és:", numero);
}

processar(10, callbackFunc);
