// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:
function primeiroEUltimoElemento(array) {
  return [array.shift(), array.pop()];
}

console.log(primeiroEUltimoElemento([3, 4, 5, 6, 7, 8, 9]));
