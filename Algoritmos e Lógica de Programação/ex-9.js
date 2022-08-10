// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(e, quantidade) {
  let array = [];
  for (let i = 0; i < quantidade; i++) {
    array.push(e);
  }
  return array;
}

console.log(repetir("Eliabe", 3));

function repetir2(e, quantidade) {
  //O método Array(quantidade), cria um array com o tamanho informado. O método fill por sua vez, preenche o array com o elemento informado.
  return Array(quantidade).fill(e);
}
console.log(repetir2("Eliabe", 3));
