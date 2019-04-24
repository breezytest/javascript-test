function dummy () {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */
function reverse (arr) {	
  var newArr = [];
  for(var i = arr.length - 1; i >= 0; i--){
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse(text){
  var wordsArray = text.split(" ");
  var reversedWordConcat = "";
  wordsArray.forEach(letter=>{
    var reversedWord = ""; 
    for(var i = letter.length - 1; i >= 0; i--){
      reversedWord += letter[i];
    }
    reversedWordConcat += reversedWord;
  });
  return reversedWordConcat;
}


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci(position){
  var sequence = [];
  if(position === 1)
    return [1];
  if(position === 2)
    return [1, 1];
  
  sequence = fibonacci(position - 1);
  sequence[sequence.length] = (sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return sequence;
}

/**
 * return the biggest number in the array
 * 
 * @example
 * 
 * biggest([1,3,5,7,9]) returns 9
 * 
 * @param {array} array
 * @returns {number}
 */
function biggest(array) {
  return Math.max(...array);
}

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range(start, end) {
  var i, arrRange = [];
  for(i = start; i <= (end - 1); i++){
    arrRange[arrRange.length] = i;
  }
  return arrRange;
}

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten(arrToFlatten) {
  var newArr = [];
  for(var i = 0; i < arrToFlatten.length; i++) {
    if(Array.isArray(arrToFlatten[i])) {
      newArr.push(...flatten(arrToFlatten[i]));
    } else {
      newArr[newArr.length] = arrToFlatten[i];
    }
  }
  return newArr;
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  biggest,
  flatten,
  stringReverse,
  range
};
