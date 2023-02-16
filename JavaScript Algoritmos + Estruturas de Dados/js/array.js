let avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

// console.log(avgTemp[3]);
// -------------------------------------------------------------------
let daysOfWeek = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);

for (let i = 0; i < daysOfWeek.length; i++) {
  // console.log(daysOfWeek[i]);
}
// -------------------------------------------------------------------

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (i = 3; i < 30; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
// console.log(fibonacci);

// Nova sintax do ES6
for (numero of fibonacci) {
  // console.log(numero);
}
// -------------------------------------------------------------------

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;
numbers[numbers.length] = 11;

//Insere elementos no fim do Array
numbers.push(12);
numbers.push(13);
numbers.push(14);
numbers.push(15);
numbers.push(16);

//Insere elementos no inicio do array
numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
numbers.unshift(-4);

// -------------------------------------------------------------------

//Remove elementos do fim do Array
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

//Remove elementos do inicio do array
numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();
