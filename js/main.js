/*
 Функция, возвращающая случайное целое число из переданного диапазона.
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(1, 9);

/*
Функция для проверки максимальной длины строки
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/
let x = 'Academy';
let empty = '';

console.log('Слово «Academy» занимает ' + x.length + ' кодовых значений');
/* "Слово «Academy» занимает 7 кодовых значений" */

console.log('Пустая строка имеет длину, равную ' + empty.length);
/* "Пустая строка имеет длину, равную 0" */

let checkComment = function (string, maxSybols) {
  string = string.length;
  if (string <= maxSybols) {
    console.log('true');
  } else {
    console.log('false');
  }
}

string = 'Пример функции';
maxSybols = 1;
checkComment(string, maxSybols);

