function sum(a, b) {
  return a + b;
}

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

function compileErrorCode() {
  throw new Error('you are inside the error function');
}

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('peanut butter');
  }, 300);
});

const myFailedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Failed');
  }, 300);
});

let city = [];

function initializeCityDatabase() {
  city = [...city, 'Delhi', 'UP', 'HP', 'MP'];
}

function clearCityDatabase() {
  city = [];
}

function isCity(comparedCity) {
  return !!city.includes(comparedCity);
}

function addCity(newCity) {
  city = [...city, newCity]
}

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

module.exports = {
  sum,
  shoppingList,
  compileErrorCode,
  myPromise,
  myFailedPromise,
  initializeCityDatabase,
  clearCityDatabase,
  isCity,
  addCity,
  forEach
}