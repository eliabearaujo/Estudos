// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

function retornaNumeros(array) {
  const newArray = array.filter((array) => typeof array === "number");
  return newArray;
}

console.log(retornaNumeros(["Ana", 3, true, "alo", 5, 10]));
