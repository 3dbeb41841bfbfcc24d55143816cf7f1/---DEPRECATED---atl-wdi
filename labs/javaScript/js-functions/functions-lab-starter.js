// Question 1
function maxOfTwoNumbers(a, b) {
    if (a > b) {
            return a;
    }
    else {
        return b;
    }
}
maxOfTwoNumbers(2, 28);


// Question 2
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (a < b && b > c) {
        return b;
    }
    else {
        return c;
    }
}
maxOfThree(2, 3, 4);
// Question 3
function isCharacterAVowel(c) {
    var vowels = ['a','e','i','o','u'];
    if (vowels.indexOf(c) !== -1) {
      return true;
    }
    else {
      return false;
    }
}
isCharacterAVowel("c");

// Question 4
nums = [1, 2, 3, 4, 5];
function sumArray(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
}
sumArray(nums);
// Question 4
nums = [1, 2, 3, 4, 5];
function multArray(nums) {
    var product = nums[0];
    for (var i = 0; i < nums.length; i++) {
      product *= nums[i];
    }
    return product;
}
multArray(nums);


// Question 5
var numberOfArguments = function(){
  var args
}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
