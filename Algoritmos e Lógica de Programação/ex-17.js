// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

function somarArray(array) {
  return array.reduce((acc, atual) => {
    return acc + atual;
  });
}

console.log(somarArray([3, 4, 5, 6]));
