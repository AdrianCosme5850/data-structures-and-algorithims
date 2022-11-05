'use strict';

const HashTable = require('./HashTable');


// Find the first word that occurs more than once in a table

let repeatedWord = (string) => {
  let newArr = string.split(' ');
  let regex = /[a-zA-Z]+/;
  let table = new HashTable(newArr.length * 10);
  for(let word of newArr){
    let lowerCaseString = word.toLowerCase();
    let filteredWord = lowerCaseString.match(regex);
    console.log(filteredWord[0]);
    if(table.add(filteredWord[0])){
      return filteredWord[0];
    }
  }
  return 'No duplicate words';
};

describe('Testing our repeated word function', () => {
  test('The function should return the word that was used most in a given string', () => {
    let string = 'This sentence is to test the repeated word function, this.';
    expect(repeatedWord(string)).toEqual('this');
  });
  test('Function should handle edge case where there are no words repeated', () => {
    let string = 'No words are repeated in this string';
    expect(repeatedWord(string)).toEqual('No duplicate words');
  });
  test('Function should handle edge case where there is only one word in the string', () => {
    let string = 'word';
    expect(repeatedWord(string)).toEqual('No duplicate words');
  });
});
