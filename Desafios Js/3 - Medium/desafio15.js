// Desafio 15: Código Romano |

// Escreva uma função que recebe uma string de algarismos romanos e seja capaz de traduzir seu conteúdo retornando o inteiro decimal correspondente.
// Os algarismos romanos são:
// I:1
// V:5
// X:10
// L:50
// C:100
// D:500
// M: 1000

// Os outros números são formados a partir de dois tipos de notação, a padrão e a subtrativa.

// * Notação Padrão: I, II, III(1,2e3), VI, VII, VIII(6,7e8),X, XX e XXX (10, 20 e 30), etc.

// * Notação Subtrativa: IV (1-5=4),IX(1-10= 9), XLIX (10 - 50 + 1-10 =49), XC (10 - 100 =90), CMXCIX (100 - 1000 + 10- 100 +71 -10 = 999)

function convertNumber(number) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let valor = 0;
  for (let i = 0; i < number.length; i++) {
    let actualNumber = values[number[i]];
    let nextNumber = values[number[i + 1]];
    actualNumber < nextNumber
      ? (valor -= actualNumber)
      : (valor += actualNumber);
  }
  return console.log(valor);
}

convertNumber('XLVII'); //47
convertNumber('CDXXXVIII'); //438
convertNumber('CMIX'); //909
convertNumber('MMMCMXCIX'); //399
