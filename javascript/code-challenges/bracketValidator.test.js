'use strict';

let bracketValidator = (string) => {
  let curly = 0;
  let brack = 0;
  let para = 0;
  let splitString = string.split('');
  for(let i = 0; i < splitString.length; i++){
    splitString[i] === '{' ? curly++ :
      splitString[i] === '}' ? curly-- :
        splitString[i] === '[' ? brack++ :
          splitString[i] === ']' ? brack-- :
            splitString[i] === '(' ? para++ :
              splitString[i] === ')' ? para-- : {};
  }
  let total = curly + brack + para;
  if (total === 0){return true;} else {return false;}
};

describe('Testing the bracket validating function', () => {
  test('The function should return true with balanced brackets', () => {
    expect(bracketValidator('{[()]}')).toEqual(true);
  });
  test('The function should return false with unbalance brackets', () => {
    expect(bracketValidator('{[(')).toEqual(false);
    expect(bracketValidator('((')).toEqual(false);
  });
});
