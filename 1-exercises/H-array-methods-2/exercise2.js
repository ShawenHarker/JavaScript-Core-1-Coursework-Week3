/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/
// In this function I am taking the first letter of each string and returning it to a capital letter.
function capitalise (str) {
  let capitalLetter = str[0].toUpperCase();
  let lowerLetters = str.slice(1);
  return capitalLetter + lowerLetters;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
