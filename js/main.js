/*
Функция, возвращающая случайное целое число из переданного диапазона.
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
randomInteger(0,8);

/*
Функция для проверки максимальной длины строки
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/

function checkComment(string, maxSybols) {
  if (string.length <= maxSybols) {
    return true;
  } return false;
}
checkComment ('Пример функции',8);
