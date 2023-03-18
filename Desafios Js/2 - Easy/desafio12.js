// Desafio 12: Espaçoporto Comercial

// Escreva uma função que receba um valor inteiro e retornea quantidade de cada moeda para se chegar ao valor.

// Deve-se sempre priorizar as moedas de maior valor(o máximo possível de moedas de 500, depois o máximo possível de moedas de 100, etc).

function contarMoedas(value) {
  const moedas = { 1: 0, 5: 0, 10: 0, 25: 0, 100: 0, 500: 0 };
  const moedas2 = Object.keys(moedas).reverse();
  for (i = 0; i < moedas2.length; i++) {
    const valor = Math.floor(value / moedas2[i]);
    moedas[moedas2[i]] = valor;
    value %= moedas2[i];
  }

  return moedas;
}

console.log(contarMoedas(478));
console.log(contarMoedas(384));
console.log(contarMoedas(5412));
console.log(contarMoedas(50));
