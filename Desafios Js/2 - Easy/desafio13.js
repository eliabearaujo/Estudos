// Desafio 13: Código de Identificação de Nave

// Escreva uma função que recebe um número e verifica se ele é um código de identificação válido segundo as regras de criação do dígito verificador. A criação do dígito verificador funciona da seguinte forma:

// 1. Some os dígitos das posições pares (ímpares se estiver contando a partir de 1);
// 2. Multiplique esse resultado por 3;
// 3. Some os dígitos das posições ímpares (pares se estiver contando a partir de 1) do número original e então some esse resultado ao resultado do passo anterior;
// 4. Encontre o resto da divisão do resultado do passo anterior por 10;
// 5. Se o resto da divisão for 0, o dígito verificador é 0, do contrário o dígito verificador é 10 - resto.

function somarPares(array) {
  const par = array.reduce((acumulador, atual, index) => {
    return index % 2 === 0 ? acumulador + atual : acumulador;
  }, 0);
  return par;
}

function somarImpar(array) {
  const impar = array.reduce((acumulador, atual, index) => {
    return index % 2 === 0 ? acumulador : acumulador + atual;
  }, 0);
  return impar;
}

function verificarCódigoDeIdentificação(number) {
  const arrayNumber = number.toString().split('').map(Number);
  const arrayWithoutLastDigit = arrayNumber.slice(0, -1);
  const par = somarPares(arrayWithoutLastDigit) * 3;
  const impar = somarImpar(arrayWithoutLastDigit);
  const soma = par + impar;
  const digit = soma % 10 !== 0 ? 10 - (soma % 10) : 0;
  return digit === arrayNumber[arrayNumber.length - 1];
}

//Resolução do curso:

console.log(verificarCódigoDeIdentificação(547020743789));
console.log(verificarCódigoDeIdentificação(301354030348));
console.log(verificarCódigoDeIdentificação(301354030349));
console.log(verificarCódigoDeIdentificação(123456789872));
