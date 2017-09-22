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
        console.log(this.foodInTummy)
        console.log(`${this.name} says WAHHHHH`)
    }
    puke(){
        --this.foodInTummy
        console.log(this.foodInTummy)
        console.log(`${this.name} says WAHHHHH`)
    }
    yawn(){
        --this.restedness
        console.log(this.restedness)
        console.log(`${this.name} has current restedness of ${this.restedness}`)
    }
}

//create new Tamagotchis
const tama = new Tamagotchis("Bob", "Builder")
const gotchi = new Tamagotchis("Spongebob", "Squarepants")


//test out your Tamagotchies below via console.logs
tama.cry()
gotchi.cry()