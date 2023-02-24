// Desafio 2: Procedimento Recursivo |

// Escreva uma função que recebe um número e retorna uma quantidade equivalente de chunks separados por um traço -" sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc).

function chunks(n) {
  if (n === 0) {
    return '';
  } else if (n === 1) {
    return 'chunk';
  } else {
    return chunks(n - 1) + '-chunk';
  }
}

console.log(chunks(3)); // retorna "chunk-chunk-chunk"
console.log(chunks(5)); // retorna "chunk-chunk-chunk-chunk-chunk"
console.log(chunks(0)); // retorna ""
