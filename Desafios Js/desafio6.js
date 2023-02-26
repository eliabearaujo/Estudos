// Desafio 6: História Escondida

// Escreva uma função que recebe uma string e retorna cada palavra da string invertida e em letras minúsculas, porém com as palavras na mesma ordem.

// Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.

function reverseFrase(frase) {
  const array = frase.toLowerCase().split(' ');
  const reversedArray = array.map((string) =>
    string.split('').reverse().join('')
  );
  const reversedFrase = reversedArray.join(' ');
  return reversedFrase;
}

// Refatorado
function invertWord(word) {
  return word.split('').reverse().join('');
}

function invertFrase(frase) {
  return frase.toLowerCase().split(' ').map(invertWord).join(' ');
}

console.log(reverseFrase('Eliabe TRAJANO de Araujo'));
console.log(invertFrase('Eliabe TRAJANO de Araujo'));
