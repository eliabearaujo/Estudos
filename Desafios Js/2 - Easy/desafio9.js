// Desafio 9: Instruções de Emergência

// Escreva uma função que recebe uma string, verifica se ela possui a mesma quantidade de cada letra que a compõe retorna true caso possua ou false caso não possua.
function compareCounts(count, index, array) {
  return index !== 0 ? count === array[index - 1] : true;
}
function verificarLetras(string) {
  const charCount = {};
  for (let i = 0; i < string.length; i++) {
    const currentLetter = currentLetter;
    charCount[currentLetter] = charCount[currentLetter]
      ? charCount[currentLetter] + 1
      : 1;
  }
  return Object.values(charCount).every(compareCounts);
}

console.log(verificarLetras('aassddffc'));
