// Desafio 10: Procedimento Recrusivo Il

// Escreva uma função que recebe um número e retorna o seu fatorial sem utilizar nenhuma estrutura de repetição (while, downhile, for, etc).

// O fatorial de um númeroé igual a multiplicação de todos os inteiros positivos menores ou iguais a ele. Ela deve ser capaz de retornar números inteiros corretos mesmo para valores altos.

function fatorial(number) {
  const bigNum = BigInt(number);
  if (bigNum === 0n || bigNum === 1n) {
    return 1n;
  } else {
    return bigNum * fatorial(bigNum - 1n);
  }
}
console.log(fatorial(32));
