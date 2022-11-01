function sortYear(movies) {
  movies.sort((a,b) => {
    if(a.year < b.year){
      return -1
    };
    if(a.year > b.year){
      return 1
    };
    if(a.year === b.year){
      return 0
    }
  })
  return movies
}

function sortTitle(movies) {
  function theCheck (word){
    let splitWord = word.split(' ')
    if(splitWord[0] === 'The'){
      splitWord.splice(0, 1).join(' ');
    };
    return splitWord[0];
  }
  movies.sort((a,b) => {
    let checkedA = theCheck(a.title).toLowerCase();
    let checkedB = theCheck(b.title).toLowerCase();

    if(checkedA < checkedB){
      return -1
    };
    if(checkedA > checkedB){
      return 1
    };
    if(checkedA === checkedB){
      return 0
    }
  })
  return movies
}

function inGenre(movies, genre) {
  let newArr = [];
  for(let i = 0; i < movies.length; i++){
    for(let j = 0; j < movies[i].genres.length; j++){
      if(movies[i].genres[j] === genre){
        newArr[newArr.length] = movies[i];
        break;
      }
    }
  }
  return newArr;
}

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};
