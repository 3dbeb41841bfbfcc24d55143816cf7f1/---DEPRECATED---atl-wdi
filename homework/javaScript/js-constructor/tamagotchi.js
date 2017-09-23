console.log('tamagotchi file is loaded');


//your class declaration here
class Tamagotchi {
    constructor (name, creatureType) {
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }
    cry() {
        foodInTummy --;
        console.log("wwwwwaaaaaahhhnnnnnn")
        console.log("current food in my tummy " + this.foodInTummy);
    }
}

//create new Tamagotchis
var constructedObject1 = new Tamagotchi();
var constructedObject2 = new Tamagotchi();

//test out your Tamagotchies below via console.logs
console.log(constructedObject1);
console.log(constructedObject2);

constructedObject1.cry();
constructedObject2.cry();