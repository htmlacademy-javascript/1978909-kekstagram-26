/*
Функция, возвращающая случайное целое число из переданного диапазона.
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
randomInteger(0,8);
*/
/*
Функция для проверки максимальной длины строки
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/

function checkComment(string, maxSybols) {
  if (string.length <= maxSybols) {
    return true;
  } return false;
}
checkComment('Пример функции',8);

const CONTENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.',
];

const FIRST_NAME = [
  'Ivan',
  'Igor',
  'Semen',
  'Tony',
  'Joseph',
  'Den',
  'Boris',
  'Morty',
  'Vladimir',
];

const DESCRIPTION = [
  'cat',
  'dog',
  'house',
  'dark knight',
  'orange',
  'red flower',
  'Paris',
  'lasagna',
  'train',
];

const NUMBER_OF_PHOTOS = 25;

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getRandomArrayElement = (elements) => elements[randomInteger(0, elements.length - 1)];

function getPostingPhoto () {
  return {
    id: randomInteger(1, 25),
    url: `photos/${randomInteger(1, 25)}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: randomInteger(15, 200),
    comments: comments(),
  };
}

function comments () {
  return {
    id: randomInteger(1, 999),
    avatar: `img/avatar - ${randomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(CONTENT),
    firstname: getRandomArrayElement(FIRST_NAME),
  };
}

// eslint-disable-next-line no-unused-vars
const gallary = Array.from({length: NUMBER_OF_PHOTOS}, getPostingPhoto);
