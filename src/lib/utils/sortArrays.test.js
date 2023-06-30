import { test, expect } from 'vitest'
import sortArray from './sortArrays';


test('Deve retornar um array diferente', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(sortArray(array)).not.toBe(array);


});
test('Deve retornar um array embaralhado', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const array2 = [...array];

  expect(sortArray(array)).not.toEqual(array2);

});