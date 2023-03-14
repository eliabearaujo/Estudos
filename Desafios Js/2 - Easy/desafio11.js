// Desafio 11: Intervalo de Coordenadas

// Escreva uma função que receba um par ordenado (x, y) e retorne um array de pares (x, y) onde cada um deles possi x ey menor ou igual ao par recebido em ordem crescente

// Os pares devem ser ordenados de forma que primeiro aumente o valor de y e depois o valor de x.

// Apenas o quadrante onde x e y são positivos deve ser considerado.

function getPairs(x, y) {
  const pairs = [];

  for (i = 0; i <= x; i++) {
    for (j = 0; j <= y; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

console.log(getPairs(2, 2));
