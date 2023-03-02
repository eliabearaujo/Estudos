// Desafio 8: Biblioteca Interplanetária

// Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, exceto o último, abreviados e o último nome em letras
// maiúsculas antes das abreviações separado por virgula.

function refName(name) {
  const nameArray = name
    .toUpperCase()
    .split(' ')
    .map((name, index, array) => {
      if (index === array.length - 1) {
        return name.concat(',');
      } else {
        return name.charAt(0).concat('.');
      }
    });
  let newArrayName = [
    nameArray[nameArray.length - 1],
    ...nameArray.slice(0, -1),
  ];

  return newArrayName.join(' ');
}

// Método do curso
function quotation(fullName) {
  const names = fullName.split(' ');
  let initials = '';

  for (let i = 0; i < names.length - 1; i++) {
    initials += ` ${names[i][0].toUpperCase()}.`;
  }
  return `${names[names.length - 1].toUpperCase()},${initials}`;
}
console.log(refName('Isaac Larrubia Ferreira Pontes'));
console.log(refName('John Ronald Reuel Tolkien'));
console.log(refName('christopher james paolini'));
console.log(refName('Suzanne Marie Collins'));

console.log(quotation('Isaac Larrubia Ferreira Pontes'));
console.log(quotation('John Ronald Reuel Tolkien'));
console.log(quotation('christopher james paolini'));
console.log(quotation('Suzanne Marie Collins'));
