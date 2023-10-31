function moreThanOne(letter, word){
  let found = false;
  for (let i = 0; i < word.length; i++){
    if (letter === word[i]) {
      if (!found) {
        found = true;
      }
      else {
        return true;
      }
    }
  }
  return false;
}

module.exports = moreThanOne;
