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

// -------------------------------------------------------------------
// let avgTempWeek = [];
// let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
// let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

// avgTempWeek[0] = avgTempWeek1;
// avgTempWeek[1] = avgTempWeek2;

// for (let i = 0; i < avgTempWeek.length; i++) {
//   for (let j = 0; j < avgTempWeek[i].length; j++) {
//     console.log(avgTempWeek[i][j]);
//   }
// }

// -------------------------------------------------------------------
let month = [];
let firstWeeks = [];
let lastWeeks = [];
let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];
let avgTempWeek3 = [13, 45.7, 18, 7, 13.4, 21.5, 15];
let avgTempWeek4 = [51, 19, 23, 26.2, 9.5, 14.4, 31.8];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];
month = [firstWeeks, lastWeeks];

for (let i = 0; i < avgTempWeek.length; i++) {
  for (let j = 0; j < avgTempWeek[i].length; j++) {
    console.log(avgTempWeek[i][j]);
  }
}
