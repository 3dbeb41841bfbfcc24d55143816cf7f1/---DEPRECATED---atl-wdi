// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  // Your Code Here
  var coinValues = [25, 10, 5, 1];
  var amountOwed = Math.round((payment - price) * 100);
  //Amount to work with = payment - price (6.00 - 5.25) Multiplied by 100
  //So, .75 *100 = 75
  //
  //Then, Use the modulus operator to look at quarters
  //let's create an array
  
  if (amountOwed <= 0){
    console.log("No Change")
    return [0,0,0,0];
  }
  
  var amountRemaining = amountOwed;
  console.log("Amount remaining " + amountRemaining);
  var results = [];
  for (var i = 0; i < coinValues.length; i++){
      var numCoins = amountRemaining / coinValues[i];
      numCoins = Math.floor(numCoins);
      console.log("Pay out " + numCoins)
      results.push(numCoins);
      var amountToRemove = numCoins * coinValues[i];
      amountRemaining = amountRemaining - amountToRemove;
      console.log("Amount remaining now " + amountRemaining)
  }
  return results
};



/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
