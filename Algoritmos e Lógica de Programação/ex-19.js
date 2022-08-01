// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

function retornarMedia(array) {
  const qtNumeros = array.length;
  const somaTotal = array.reduce((acc, atual) => {
    return acc + atual;
  }, 0);
  return somaTotal / qtNumeros;
}

console.log(retornarMedia([2, 4, 8, 2]));
