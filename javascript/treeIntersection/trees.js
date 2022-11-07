'use strict';

let treeOne = {
  root: {
    value: 10,
    left: {
      value: 20,
      left:null,
      right:null,
    },
    right: {
      value: 40,
      left:null,
      right:null
    },
  }
}


let treeTwo = {
  root: {
    value: 10,
    left: {
      value: 20,
      left:null,
      right:null,
    },
    right: {
      value: 30,
      left:null,
      right:null
    },
  }
}

module.exports = {
  treeOne,
  treeTwo,
}
