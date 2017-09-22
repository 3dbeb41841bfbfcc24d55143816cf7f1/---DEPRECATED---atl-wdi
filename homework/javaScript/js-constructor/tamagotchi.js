console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchis {
    constructor(){
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }
    cry(){
        --this.foodInTummy
        console.log(foodInTummy)
        console.log("WAHHHHH")
    }
}

//create new Tamagotchis
const tama = new Tamagotchis()
const gotchi = new Tamagotchis()


//test out your Tamagotchies below via console.logs
tama.cry()
gotchi.cry()