function getRandomArbitrary(min, max) {       // Функция, возвращающая случайное целое число из переданного диапазона.
  return Math.random() * (max - min) + min;   // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
let x = 'Academy';                            // Функция для проверки максимальной длины строки
let empty = '';                               // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length

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

/*
string = 'Пример функции';
maxSybols = 1;
console.log(checkComment (string, maxSybols));
*/
