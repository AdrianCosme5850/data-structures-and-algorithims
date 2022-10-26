'use strict';

function arraySort(array) {
  for(let i = 1; i < array.length; i++){
    let j = i-1;
    let temp = array[i];
    while( j >= 0 && temp < array[j]){
      array[j+1] = array[j];
      j = j-1;
      array[j+1] = temp
    }
  }
  return array
}

describe('Testing merge sort function', () => {
  test('Should sort a basic array', () => {
    let array = [5, 4, 3, 2, 1];
    let sortedArray = arraySort(array);
    expect(sortedArray).toEqual([ 1, 2, 3, 4, 5])
  });
  test('Should accept an array with a single value', () => {
    let array = [1];
    let sortedArray = arraySort(array);
    expect(sortedArray).toEqual([1]);
  })
  test('Should accept an array with duplicate values', () => {
    let array = [ 5, 4, 3, 3, 2, 1];
    let sortedArray = arraySort(array);
    expect(sortedArray).toEqual([1, 2, 3, 3, 4, 5]);
  })
})
