'use strict';

const LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  /**
   * Return a hash value for the provided key.
   * @param {String} key
   */
  hash(key) {
    let charSum = 0;
    for (let char in key) {
      charSum += key.charCodeAt(char);
    }
    return (charSum * 599) % this.size;
  }

  /**
   * places a value into our Hash Table by hashing our key, and setting our value into that Bucket of the table.
   * @param {String} key
   * @param {Any} value
   */
  set(key, value) {
    let index = this.hash(key);
    if(!this.table[index]){
      this.table[index] = {
        key: key,
        values: new LinkedList()
      };
      this.table[index].values.add(value);
    } else {
      this.table[index].values.add(value);
    }
  }

  /**
   * returns the value stored in the bucket associated with the key parameter.
   * @param {String} key
   * @return {any}
   */
  get(key) {
    for(let bucket of this.table){
      if(bucket)
      {if(bucket.key === key){
        return bucket;
      }}
    }
    return null;
  }

  /**
   * Returns a Boolean, indication if the kye exists in the table.
   * @param (String) key
   * @return {Boolean}
   */
  has(key) {
    for(let bucket of this.table){
      if(bucket)
      {if(bucket.key === key){
        return true;
      }}
    }
    return false;
  }

  /**
   * Returns a collection of Keys
   * @return {Array}
   */
  keys() {
    let newArr = [];
    for(let bucket of this.table){
      if(bucket){
        newArr[newArr.length] = bucket.key;
      }
    }
    return newArr;
  }
}

module.exports = HashTable;
