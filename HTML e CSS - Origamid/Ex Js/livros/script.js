// function livro(nome, ano, autor) {
//   const nomeMaiusculo = nome.toUpperCase();
//   const anos = 2050 - ano;
//   const frase = nome + " por " + autor;

//   const book = {
//     nomeMaiusculo,
//     anos,
//     frase,
//   };
//   return book;
// }

// const retorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(retorno.frase);

// Diminuindo o código

// function livro(nome, ano, autor) {
//   const book = {
//     nomeMaiusculo: nome.toUpperCase(),
//     anos: 2050 - ano,
//     frase: nome + " por " + autor,
//   };
//   return book;
// }

// const retorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(retorno.frase);

// Diminuindo ainda mais o código

function livro(nome, ano, autor) {
  return {
    nomeMaiusculo: nome.toUpperCase(),
    anos: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const retorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(retorno.frase);
