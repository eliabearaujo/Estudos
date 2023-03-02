// Desafio-1: Ajudando a Academia

// Escreva uma função que recebe um número qualquer de números inteiros como argumentos e retorne a média aritmética entre eles.

function media(...array) {
  const sum = array.reduce((accum, num) => accum + num, 0);
  // let sum = 0;
  //Fiz do modo abaixo, mas existe uma segunda alternativa:

  // 1

  // for (i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }

  // 2

  // array.forEach((number) => {
  //   sum += number;
  // });
  return console.log(sum / array.length);
}

media([10, 9, 6, 8, 9, 1, 5, 7]);
media([2, 5, 7, 1, -2]);
media([10, 10, 10, 10, 9]);
media([25, 75]);
