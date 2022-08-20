// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: "Eliabe",
  sobrenome: "Araujo",
  idade: 26,
  UF: "SP",
  mostrarNome() {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

eu.mostrarNome();
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Auau";
    }
  },
};
