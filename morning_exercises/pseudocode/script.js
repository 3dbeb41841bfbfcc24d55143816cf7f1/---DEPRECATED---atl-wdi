//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallCost = small * 60;
  var largeCost = total - smallCost;
  totalBarrels = small + large;
  largeRumPrice = largeCost / totalBarrels;
  return largeRumPrice;
  
};

barrels(2,3,825);

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  var distance = 24901;
  totalGallons = fuelPrice / milesPerGallon;
  totalFuelCost = totalGallons * distance;
  return totalFuelCost;
};

shipFuelCost(3, 12);

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  var totalGallonsFruitJuice = (a * (b / 100)) + (c * (d / 100));
  var totalGallons = a + c;
  var percentFruitJuice = totalGallonsFruitJuice / totalGallons;
  return percentFruitJuice;
};
calcFruitJuice(3, 20, 2, 55);
//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
