//99 PROBLEMS

// Subjects covered.

// Creating functions
// Iteration and nesting
// Functions on numbers, strings, arrays

//Problem 1

//Write a for loop that will console.log the numbers 0 to 999.

for (i = 0; i < 1000; i++){
    console.log(i);
};

//Problem 2

//Write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

for (i = 999; i > -1; i--){
    console.log(i);
};

//Problem 3

var directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"]
//Write a for loop that iterates over the directors array and console.logs each director.

for (i = 0; i < directors.length; i++){
    console.log(directors[i]);
}

//Problem 4

//Write another for loop that iterates over the directors array but also adds the string "Hi, " to the beginning of the name.

//=> "Hi, Michelangelo Antonioni"
//=> "Hi, David Lynch"
for (i = 0; i < directors.length; i++){
    console.log("Hi, " + directors[i]);
}

//Problem 5

Write a function isCool that accepts one parameter, name as an argument. The function should return a string that outputs the name and a message saying that the person is super cool.

function isCool(name){
    return name + " is super cool";
}

console.log(isCool("Thom"));

//=> "Thom is super cool";



//Problem 6

//Write a function twoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function twoLengths(lengthOne, lengthTwo){
    numberOne = lengthOne.length;
    numberTwo = lengthTwo.length
    console.log(numberOne + ", " + numberTwo);
}
// example usage
//twoLengths("Hank", "Hippopopalous");
// => [4, 13]
//Problem 7

//=> 225

function transmogrifier(numOne, numTwo, numThree){
    return Math.pow((numOne * numTwo), numThree);
}

//Problem 8

Fizz Buzz! Write a loop that will iterate through numbers from 1 to 100 and log each number in the console.

In the loop, every time a number is divisible by 3, the word "Fizz" should appear instead of the number.

If the number is divisible by 5, the word "Buzz" should appear instead of the number.

If the number is divisible by both 3 and 5, then the word "Fizzbuzz" should appear.

for (i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizzbuzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// Hint: Use modulus %

// =>

// 1
// 2
// Fizz
// 3
// 4
// Buzz
// 6
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// Fizzbuzz
// etc...

//Problem 9

Write a function wordReverse that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

console.log(wordReverse("Ishmael me Call"));

=> "Call me Ishmael"

function wordReverse(yourString){
          var startingSlice = 0
          var words = [];
    for (i = 0; i < yourString.length; i++){

        if (yourString.charAt(i) === " "){
            words.push(yourString.slice(startingSlice, i));
            startingSlice = startingSlice + i;
        }
        else {
          words.push(yourString.slice(startingSlice, -1));
        }
    }
    for (i = words.length; i > 0; i--){
      console.log(words[i]);
    }
}
wordReverse("Happy birth day");

//Problem 10

Write a function longestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

newArray = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];
//console.log(longestWord(newArray));
function longestWord(newArray){
    var myLongestWordLength = 0;
    var myLongestWord
    for (i = 0; i < newArray.length; i++){
        if (newArray[i].length > myLongestWordLength){
            myLongestWord = newArray[i];
        }
    }
    console.log(myLongestWord);
}


=> "Peanutbutter"
11

Write a function digitSum that accepts a number and returns the sum of its digits using a for loop.

console.log(digitSum(42));
=> 6;
12

Write a function insertDash that accepts a number as a parameter and returns the parameter with a dash inserted between 2 odd numbers.

console.log(insertDash(454793));
=> 4547-9-3
Want more?

Have a look at https://projecteuler.net/archives