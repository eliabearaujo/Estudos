// Desafio 14: Licença de Voo

// Escreva uma classe que contenha um método para gerar uma licença de voo e os seguintes atributos:
// * Nome
// * Sobrenome
// * Data de Nascimento
// * Licença de Voo (que deve iniciar sempre como falso)

// Além disso a classe deve possuir um método para criar uma licença caso a pessoa ainda não possua uma. A licença deve ser uma string seguindo o seguinte padrão:

// - Os primeiros cinco caracteres do sobrenome em letras maiúsculas (completado com 9's caso possua menos de cinco);

// - O 6º caractere é um traço (-);

// - O 7º caractere é o algarismo da década (penúltimo) do ano de nascimento;

// - O 8º e 9º caracteres são o mês de nascimento;

// - O 10º caractere é o algarismo do ano (último) do ano de nascimento;

// - O 11º caractere é um ponto (.);

// - O 12º caractere é a primeira letra do primeiro nome (minúscula).

class PilotLicense {
  constructor(firstName, lastName, inputBirthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.inputBirthday = inputBirthday;
    this.flyingLicense = false;
  }

  fixDate() {
    const arrayDate = this.inputBirthday.split(/[./-]/);
    return arrayDate;
  }
  fixLastName() {
    let firstPart = '';
    if (this.lastName.length > 5) {
      firstPart = this.lastName.substring(0, 5).toUpperCase();
    } else {
      firstPart = this.lastName.toUpperCase().padEnd(5, '9');
    }
    return firstPart;
  }
  generateLicense() {
    const lastName = this.fixLastName();
    const fixedDate = this.fixDate();
    const license =
      lastName +
      '-' +
      fixedDate[fixedDate.length - 1].charAt(
        fixedDate[fixedDate.length - 1].length - 2
      ) +
      fixedDate[fixedDate.length - 2] +
      fixedDate[fixedDate.length - 1].charAt(
        fixedDate[fixedDate.length - 1].length - 1
      ) +
      '.' +
      this.firstName.charAt(0).toLowerCase();
    return console.log(license);
  }
}

const JohnDoe = new PilotLicense('John', 'Doe', '25/05/1977');
JohnDoe.generateLicense();
const HalJordan = new PilotLicense('Hal', 'Jordan', '02/09/1995');
HalJordan.generateLicense();
const CarolDanvers = new PilotLicense('Carol', 'Danvers', '17/08/1968');
CarolDanvers.generateLicense();
const PoeDameron = new PilotLicense('Poe', 'Dameron', '09/03/1979');
PoeDameron.generateLicense();
