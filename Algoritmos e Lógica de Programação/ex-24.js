// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

function qtletras(caractere, frase) {
  let qt = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === caractere) {
      qt++;
    }
  }
  return qt;
}

console.log(qtletras("a", "Eliabe Trajano de Araujo"));

function qtletras2(caractereBuscado, frase) {
  return [...frase].filter((caractere) => caractere === caractereBuscado)
    .length;
}

console.log(qtletras2("a", "Ana Carolina Vieira da Silva"));
