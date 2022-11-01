'use strict';

const HashTable = require('../HashTable');
let testTable = new HashTable(10);


describe('Testing the Hash Table class', () => {

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    testTable.set('a', 'rat');
    testTable.set('c', 'cat');
    expect(testTable.table[3].values.head.value).toEqual('rat');
  });
  test('Retrieving based on a key returns the value stored', () => {
    expect(testTable.get('a').values.head.value).toEqual('rat');
  });
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(testTable.get('b')).toEqual(null);
  });
  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    expect(testTable.keys()).toEqual(['c','a']);
  });
  test('Successfully handle a collision within the hashtable', () => {
    testTable.set('a', 'ratButAgain');
    let aKey = testTable.get('a');
    expect(aKey.values.head.value).toEqual('rat');
    expect(aKey.values.head.next.value).toEqual('ratButAgain');
  });
  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let aKey = testTable.get('a');
    expect(aKey.values.head.value).toEqual('rat');
    expect(aKey.values.head.next.value).toEqual('ratButAgain');
  });
  test('Successfully hash a key to an in-range value', () => {
    let hashedKey = testTable.hash('cats');
    expect(hashedKey).toBeGreaterThanOrEqual(0);
    expect(hashedKey).toBeLessThanOrEqual(10);
  });
  test('Can receive a boolean value if a key exists in the table.', () => {
    expect(testTable.has('a')).toEqual(true);
    expect(testTable.has('b')).toEqual(false);
  });
});
