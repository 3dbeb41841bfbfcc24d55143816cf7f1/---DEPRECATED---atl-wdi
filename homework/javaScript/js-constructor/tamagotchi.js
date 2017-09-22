console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchis {
    constructor(name, creatureType){
        this.name = name
        this.creatureType = creatureType
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }
    cry(){
        --this.foodInTummy
        console.log(foodInTummy)
        console.log(`${name} says WAHHHHH`)
    }
    // puke(){
    //     --this.
    // }
}

//create new Tamagotchis
const tama = new Tamagotchis("Bob", "Builder")
const gotchi = new Tamagotchis("Spongebob", "Squarepants")


//test out your Tamagotchies below via console.logs
tama.cry()
gotchi.cry()