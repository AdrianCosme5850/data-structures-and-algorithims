
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let charSum = 0;
    for (let char in key) {
      charSum += key.charCodeAt(char);
    }
    return (charSum * 599) % this.size;
  }
  set(key, value){
    let index = this.hash(key);
    this.table[index] = {[key]: value};
  }

}

function leftJoin(hashTable1, hashTable2){
  let newArr = [];
  for (let i = 0; i<hashTable1.length; i++){
    let bucketArr = [];
    let key = Object.keys(hashTable1[i])[0];
    bucketArr[bucketArr.length] = key;
    bucketArr[bucketArr.length] = hashTable1[i][key];
    bucketArr[bucketArr.length] = null;
    newArr[newArr.length] = bucketArr;
  }
  for(let i = 0; i<hashTable2.length; i++){
    if(hashTable2[i]){let key = Object.keys(hashTable2[i])[0];
      for(let j = 0; j<newArr.length; j++){
        if(newArr[j].includes(key)){
          newArr[j][newArr.length - 1] = hashTable2[i][key];
        }
      }}
  }
  return newArr;
}



describe('Testing the left join hash table functions', () => {
  test('Should be able to left join two tables', () => {
    let table = new HashTable(3);
    table.set('cat', 'feline');
    table.set('dog', 'canine');
    table.set('hawk', 'bird');

    let table2 = new HashTable(3);
    table2.set('cat', 'enemy');
    table2.set('dog', 'friend');
    table2.set('hawk', 'reptile');
    let results = leftJoin(table.table, table2.table);
    expect(results[0][2]).toEqual('enemy');
  });
  test('Should place null if a second value does not exist', () => {
    let table = new HashTable(3);
    table.set('cat', 'feline');
    table.set('dog', 'canine');
    table.set('hawk', 'bird');

    let table2 = new HashTable(3);
    table2.set('cat', 'enemy');
    table2.set('dog', 'friend');
    let results = leftJoin(table.table, table2.table);
    expect(results[2][2]).toEqual(null);
  });
  test('Should work if the second table is empty', () => {
    let table = new HashTable(3);
    table.set('cat', 'feline');
    table.set('dog', 'canine');
    table.set('hawk', 'bird');
    let table2 = new HashTable(3);
    let results = leftJoin(table.table, table2.table);
    expect(results[0][2]).toEqual(null);
  });
});
