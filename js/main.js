/*Функция, возвращающая случайное целое число из переданного диапазона.
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(1, 9);

/*Функция для проверки максимальной длины строки
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length*/

function checkComment(string, maxSybols) {
  if (string.length <= maxSybols) {
    return true;
  }
}

checkComment ('Пример функции', 8);
