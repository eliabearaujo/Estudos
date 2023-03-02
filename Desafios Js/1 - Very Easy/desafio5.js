// Desafio 5: História Escondida

// Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.

function maiorLetra(string) {
  const strLowwerCase = string.toLowerCase();
  const strArray = strLowwerCase.split('');
  const strSorted = strArray.sort();
  return strSorted[strSorted.length - 1];
}

console.log(maiorLetra('Eliabe'));
