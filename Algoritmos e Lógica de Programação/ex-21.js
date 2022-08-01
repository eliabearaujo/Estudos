// Criar uma função que receba um array de números e retorne o menor número desse array.

function retornarMenorNumero(array) {
  return array.reduce((acc, atual) => {
    return acc < atual ? acc : atual;
  });
}

console.log(retornarMenorNumero([3, 4, 54, 6]));

function retornarMenorNumero2(array) {
  return Math.min(...array);
}

console.log(retornarMenorNumero2([3, 4, 54, 6]));
