// Question 1
function maxOfTwoNumbers(numOne, numTwo) {
    if (numOne > numTwo){
        return numOne;
    } else if (numOne < numTwo){
        return numTwo;
    } else if (numOne === numTwo){
        return "Equal values"
    }
}

// Question 2
function maxOfThree(numOne, numTwo, numThree) {
        if (numOne > numTwo && numOne > numThree){
        return numOne;
    } else if (numTwo > numThree){
        return numTwo;
    } else {
        return numThree;
    }
}

// Question 3
function isCharacterAVowel(string) {
    if (string.toLowerCase() === 'a' || string.toLowerCase() === 'e' || string.toLowerCase() === 'i' || string.toLowerCase() === 'o' || string.toLowerCase() === 'u'){
        return true
    } else{
      return false
    }
}

// Question 4
function sumArray(arrayOfNumbers) {
    var sumOfArray = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++){
        sumOfArray += arrayOfNumbers[i];
    }
}

function multiplyArray(arrayOfNumbers) {
    var multipleOfArray = 1;
    for (var i = 0; i < arrayOfNumbers.length; i++){
        multipleOfArray *= arrayOfNumbers[i];
    }
    return multipleOfArray
}


// Question 5
function numberOfArguments(){
  return args.length
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments


// Question 6
function reverseString(string){
    return string.split('').reverse().join('');
};


// Question 7
function findLongestWord (arrayOfWords) {
    var longestWord = ''
  for (i = 0; i < arrayOfWords.length; i++){
    if (arrayOfWords[i].length > longestWord.length){
        var longestWord = arrayOfWords[i];
    }
  }
  return longestWord
}


// Question 8
function filterLongWords (arrayOfWords, wordLength) {
  var myLongWords = [];
  for (i = 0; i < arrayOfWords.length; i++){
      if (arrayOfWords[i].length > wordLength){
          myLongWords.push(arrayOfWords[i]);
      }
  }
  return myLongWords;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
