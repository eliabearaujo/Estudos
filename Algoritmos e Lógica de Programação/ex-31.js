// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que êm a quantidade de dígitos indicada pelo segundo parâmetro.

function filtrarPorQuantidadeDeDigitos(numeros, quantidade) {
  let resultado = [];
  for (numero of numeros) {
    if (String(numero).length === quantidade) {
      resultado.push(numero);
    }
  }
  return resultado;
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));

function filtrarPorQuantidadeDeDigitos2(numeros, quantidade) {
  return numeros.filter((numero) => {
    return String(numero).length === quantidade;
  });
}

console.log(filtrarPorQuantidadeDeDigitos2([38, 2, 365, 10, 125, 11], 2));
