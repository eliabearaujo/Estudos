// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:
function primeiroEUltimoElemento(array) {
  //O método shift remove e retorna o primeiro elemento do array, enquanto o método pop remove o ultimo e retorna o elemento.
  return [array.shift(), array.pop()];
}

console.log(primeiroEUltimoElemento([3, 4, 5, 6, 7, 8, 9]));
