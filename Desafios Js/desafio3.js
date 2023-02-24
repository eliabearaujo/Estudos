// Desafio 3: Linguagem Limitada

// Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem alterá-lo. Não utilize os métodos do objeto global Array do javascript (reverse, map, forEach, etc).

// Primeira solução, mas não podia usar métodos de array

// function reverseArray(...array) {
//   const reversedArray = [];
//   for (i = 0; i < array.length; i++) {
//     reversedArray.push(array[array.length - (1 + i)]);
//   }
//   return reversedArray;
// }

function reverseArray(...array) {
  const reversedArray = [];
  for (i = 0; i < array.length; i++) {
    reversedArray[i] = array[array.length - (1 + i)];
  }
  return reversedArray;
}
console.log(reverseArray(0, 9, 6, 8, 9, 1, 5, 7));
console.log(reverseArray('Oh', 'Hi', 'Mark'));
console.log(reverseArray(false, true, true, true));
console.log(reverseArray('Its', 'not', true, 0));
