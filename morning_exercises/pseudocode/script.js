//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (totalCost - (small * smallBarrel)) / large;
  return largeBarrel;

  barrels (2,3,825) => 141
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(costcoGal, costcoPur, kirkGal, kirkPur){
 //- Find the total amount of pure fruit juice (gal)
 //- Total of Costco pure fruit juice:
  //- percentage pure fruit juice * number of gallons
  const totalCostcoFruitJuice = costcoGal * (costcoPur/100);
//- Total of Kirkland pure fruit juice:
  //- percentage pure fruit juice * number of gallons
  const totalKirkFruitJuice = kirkGal * (kirkPur/100);
//- Add Costco pure fruit juice total + Kirkland pure fruit juice total
  const totalCombinedFruitJuice = totalCostcoFruitJuice + totalKirkFruitJuice;
//- Find the total amount of juice (gal):
//- Total of Costco juice + Total of Kirkland Juice

- Calculate (total pure fruit juice) / (total juice)


};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
