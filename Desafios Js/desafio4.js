// Desafio 4: Cálculos de Viagens Espaciais

// Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro.

function quadrado(number) {
  const string = String(number);
  let newNumber = '';

  for (const chart of string) {
    newNumber += Math.pow(chart, 2);
  }
  return Number(newNumber);
}

function quadradoArray(number) {
  const digitsArray = String(number).split('');
  const newArray = digitsArray.map((digit) => Number(digit) ** 2).join('');
  return Number(newArray);
}

// console.log(quadrado(3514));
// console.log(quadrado(94571));
// console.log(quadrado(24));
// console.log(quadrado(745821698));

console.log(quadradoArray(3514));
console.log(quadradoArray(94571));
console.log(quadradoArray(24));
console.log(quadradoArray(745821698));
