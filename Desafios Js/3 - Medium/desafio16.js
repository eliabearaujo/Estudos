// Desafio 16: Código Romano II

// Escreva uma função que recebe uma string e um numero e retorne o resultado da aplicação da Cifra de Cesar para descriptografar o seu conteúdo, ou seja, que retroceda cada letra pelo número passado seguindo a ordem alfabética.

function cifraDeCesar(string, number) {
  const srtArray = string.split('');
  //Removendo o numero de voltas que seria preciso realizar caso a number seja maior que o alfabeto.
  const normalNumber = number % 26;

  const codesArray = srtArray.map((char) => {
    const currentCode = char.charCodeAt(0);

    if (
      currentCode >= 65 &&
      currentCode <= 90 &&
      currentCode - normalNumber < 65
    ) {
      return currentCode + 26;
    }

    if (
      currentCode >= 96 &&
      currentCode <= 122 &&
      currentCode - normalNumber < 96
    ) {
      return currentCode + 26;
    }
    return currentCode;
  });

  return codesArray
    .map((code) => String.fromCharCode(code - normalNumber))
    .join('');
}

console.log(cifraDeCesar('Vguvg', 2));
console.log(cifraDeCesar('BCDYZAbcdyza', 27));
console.log(cifraDeCesar('Qaiik', 60));
console.log(cifraDeCesar('Amozmlw', 8));
