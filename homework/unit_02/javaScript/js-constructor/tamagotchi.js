console.log('tamagotchi file is loaded');

class Tamagotchi{
  constructor(){
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry(){
    this.foodInTummy--;
    console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
    console.log('current food in tummy: ' + this.foodInTummy);
  }
}

var constructedObject1 = new Tamagotchi();
var constructedObject2 = new Tamagotchi();

console.log(constructedObject1);
console.log(constructedObject2);

constructedObject1.cry();
constructedObject2.cry();