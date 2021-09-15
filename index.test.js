const { test } = require('@jest/globals');
const { describe } = require('yargs');
const { sum, shoppingList, compileErrorCode, myPromise, myFailedPromise, initializeCityDatabase, clearCityDatabase, isCity, addCity, forEach } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('the shopping list array has milk on it', () => {
  expect(shoppingList).toContain('milk');
});

test('convert shopping list into set and then check it has milk on it', () => {
  expect(new Set(shoppingList)).toContain('milk');
});

test('compiling error function goes as expected', () => {
  expect(() => compileErrorCode()).toThrow();
  expect(() => compileErrorCode()).toThrow(Error);
  expect(() => compileErrorCode()).toThrow('you are inside the error function');
  expect(() => compileErrorCode()).toThrow(/function/);
});

test('the data is peanut butter', () => {
  return myPromise.then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the function fails with an error', () => {
  expect.assertions(1);
  return myFailedPromise.catch(e => expect(e).toMatch('Failed'));
});

test('the data is peanut butter', () => {
  return expect(myPromise).resolves.toBe('peanut butter');
});

test('the function fails with an error', () => {
  return expect(myFailedPromise).rejects.toMatch('Failed');
});

test('the data is peanut butter', async () => {
  const data = await myPromise;
  expect(data).toBe('peanut butter');
});

test('the function fails with an error', async () => {
  expect.assertions(1);
  try {
    await myFailedPromise;
  } catch (e) {
    expect(e).toMatch('Failed');
  }
});

test('the data is peanut butter', async () => {
  await expect(myPromise).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(myFailedPromise).rejects.toMatch('Failed');
});

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Delhi', () => {
  expect(isCity('Delhi')).toBeTruthy();
});

test('city database has UP', () => {
  expect(isCity('UP')).toBeTruthy();
});

describe('adding a city', () => {
  beforeEach(() => {
    return addCity('J&K');
  });
  test('city database has J&K', () => {
    expect(isCity('J&K')).toBeTruthy();
  });
});

test('city database has J&K', () => {
  expect(isCity('J&K')).toBeFalsy();
});
 
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

test('mockCallback called twice', () => {
  expect(mockCallback.mock.calls.length).toBe(2);

});

test('mockCallback first result', () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});

test('mockCallback second result', () => {
  expect(mockCallback.mock.results[1].value).toBe(43);
});



test('using mock return values', () => {
  const filterTestFn = jest.fn();

  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));

  console.log(result);

  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
})




