//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
};
barrels(2, 5, 825);
//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  const earthCircumference = 24901;


  var gallonsNeeded = earthCircumference / milesPerGallon;
  var totalCost = gallonsNeeded * fuelPrice;

  return totalCost;
};

// shipFuelCost(3, 12) => 6225.25

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(gallonsA, percentageA, gallonsB, percentageB){
  //your code here
  var totalGallons = gallonsA + gallonsB;
    var totalCostcoJuice = gallonsA * percentageA;
    var totalKirklandJuice = gallonsB * percentageB;
  var totalJuice = totalCostcoJuice + totalKirklandJuice;

  var answer = (totalJuice / totalGallons) / 100;
  return answer;
};

// calcFruitJuice(3, 20, 2, 55) => 0.34

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
