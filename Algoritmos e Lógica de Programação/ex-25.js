// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

function buscarPalavrasSemelhantes(inicio, palavras) {
  const contemInicio = [];
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].includes(inicio)) {
      contemInicio.push(palavras[i]);
    }
  }
  return contemInicio;
}

console.log(
  buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
);

function buscarPalavrasSemelhantes2(inicio, palavras) {
  return palavras.filter((palavra) => palavra.includes(inicio));
}
console.log(
  buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"])
);
