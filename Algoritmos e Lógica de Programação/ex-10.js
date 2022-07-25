// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

function simboloMais(quantidade) {
  let resultado = "";
  for (let i = 0; i < quantidade; i++) {
    resultado += "+";
  }
  return console.log(resultado);
}

function simboloMais2(quantidade) {
  return Array(quantidade).fill("+").join("");
}

function simboloMais3(quantidade) {
  return "+".repeat(quantidade);
}
