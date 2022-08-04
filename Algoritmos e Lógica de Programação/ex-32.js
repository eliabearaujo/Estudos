// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaior(numeros) {
  const numerosOrdenados = numeros.sort((a, b) => {
    return b - a;
  });
  return numerosOrdenados[1];
}

console.log(segundoMaior([12, 16, 1, 5]));
