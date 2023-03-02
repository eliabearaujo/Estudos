// Desafio 7: Organizando Resultados

// Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos os números em ordem ascendente.

function arrayOrganizer(array) {
  let completeArray = [];
  for (i = 0; i < array.length; i++) {
    completeArray = completeArray.concat(array[i]).sort(function (a, b) {
      return a - b;
    });
  }
  return completeArray;
}

function arrayOrganizer2(array) {
  let completeArray = [];
  array.forEach((list) => {
    completeArray.push(...list);
  });
  return completeArray.sort(function (a, b) {
    return a - b;
  });
}

console.log(
  arrayOrganizer([
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
    [1, 93, 57, 42, 103],
  ])
);
console.log(
  arrayOrganizer2([
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
    [1, 93, 57, 42, 103],
  ])
);
