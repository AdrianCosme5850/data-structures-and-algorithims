'use strict';

class Animal {
  constructor(spec){
    this.spec = spec;
    this.next = null;
  }
}

class AnimalShelter{
  constructor(){
    this.firstDog = null;
    this.firstCat = null;
  }

  enqueue(spec){
    let newAnimal = new Animal(spec);
    if(newAnimal.spec === 'dog'){
      if(this.firstDog === null){
        this.firstDog = newAnimal;
      } else {
        let current = this.firstDog;
        while(current.next !== null){
          current = current.next;
        }
        current.next = newAnimal;
      }
    }
    if(newAnimal.spec === 'cat'){
      if(this.firstCat === null){
        this.firstCat = newAnimal;
      } else {
        let current = this.firstCat;
        while(current.next !== null){
          current = current.next;
        }
        current.next = newAnimal;
      }
    }
  }

  dequeue(pref){
    if(pref === 'dog'){
      let temp = this.firstDog;
      this.firstDog = temp.next;
      return temp.spec;
    }
    if(pref === 'cat'){
      let temp = this.firstCat;
      this.firstCat = temp.next;
      return temp.spec;
    } else {
      return null;
    }
  }
}

let animalShelter = new AnimalShelter;
describe('Testing animal shelter class methods', () => {
  test('testing if the enqueue method works', () => {
    animalShelter.enqueue('cat');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    expect(animalShelter.firstDog.spec).toEqual('dog');
    expect(animalShelter.firstCat.next.spec).toEqual('cat');
  });
  test('testing if the dequeue method works', () => {
    expect(animalShelter.dequeue('cat')).toEqual('cat');
  });
});
