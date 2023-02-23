// function Stack() {
//   let items = [];

//   this.push = function (element) {
//     //adiciona um novo item à pilha
//     items.push(element);
//   };

//   this.pop = function () {
//     //remover um elemento do topo da pilha
//     return items.pop();
//   };

//   this.peek = function () {
//     //devolve o elemento que esta no topo da pilha
//     return items[items.length - 1];
//   };

//   this.isEmpty = function () {
//     // Informar se a pilha está vazia ou não
//     return items.length === 0;
//   };

//   this.clear = function () {
//     // limpa a pilha
//     items = [];
//   };

//   this.size = function () {
//     //Informa o tamanho da pilha
//     return items.length;
//   };

//   this.print = function () {
//     // Imprime a pilha no console
//     console.log(items.toString());
//   };
// }

// let pilha = new Stack();

// pilha.push(5);
// pilha.print();
// pilha.push(8);
// pilha.print();
// pilha.push(11);
// pilha.print();
// pilha.push(15);
// pilha.print();

// pilha.pop();
// pilha.print();
// pilha.pop();
// pilha.print();
// pilha.pop();
// pilha.print();
// pilha.pop();
// pilha.print();

// console.log(pilha.isEmpty());

// function dec2Bin(decNumber) {
//   let pilha = [];
//   let rest = 0;
//   let binaryString = '';

//   while (decNumber > 0) {
//     rest = Math.floor(decNumber % 2);
//     pilha.push(rest);
//     decNumber = Math.floor(decNumber / 2);
//   }
//   while (pilha.length > 0) {
//     binaryString += pilha.pop().toString();
//   }
//   return binaryString;
// }

// console.log(dec2Bin(255));

function baseConverter(decNumber, base) {
  let pilha = [];
  let rest = 0;
  let binaryString = '';
  let digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base);
    pilha.push(rest);
    decNumber = Math.floor(decNumber / base);
  }
  while (pilha.length > 0) {
    binaryString += digits[pilha.pop()];
  }
  return binaryString;
}

console.log(baseConverter(255));
