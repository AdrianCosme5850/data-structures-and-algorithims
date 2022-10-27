'use strict';

function arraySort(array){
  let n = array.length;
  if(n > 1){
    let mid = Math.ceil(n/2);
    let left = [];
    let right =[];
     for(let i = 0; i < mid; i++){
      left[i] =  array[i]
    }
    for(let i = mid; i < n; i++){
      right[i] =  array[i]
    }
    arraySort(left);
    arraySort(right);
   return arrayMerge(left, right, [])
  }
}

function arrayMerge(left, right, array){
  let i = 0;
  let j = 0;
  let k = 0;
  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      array[k] =  right[j];
      i = i + 1;
    } else {
      array[k] = right[j];
      j = j + 1;
    }
    k = k + 1
  }
  if(i === left.length){
    for(j; j < right.length; j++){
      array[k] = right[j];
      k = k + 1
    }
  } else {
    for(i ; i < left.length; i++){
      array[k] = left[i];
      k = k + 1
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
