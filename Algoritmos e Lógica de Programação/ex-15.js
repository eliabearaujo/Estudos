// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

function retornarNEIPares(array) {
  return array.filter((item, indice) => {
    const numeroPar = item % 2 === 0;
    const indicePar = indice % 2 === 0;
    return numeroPar && indicePar;
  });
}

console.log(retornarNEIPares([2, 7, 6, 8]));
