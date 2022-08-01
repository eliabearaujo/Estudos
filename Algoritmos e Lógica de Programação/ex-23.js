// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavras(string) {
  const arrayPalavras = string.split(" ");
  return arrayPalavras.length;
}

console.log(contarPalavras("Bermudas são ótimas para usar no calor"));
