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
    start(){
        var self = this
        this.hungerTimer = setInterval(function(){ self.cry(); }, 6000)
        this.pukeTimer = setInterval(function(){ self.puke(); }, 10000);
        this.yawnTimer = setInterval(function() { self.yawn(); }, 25000);
    }
    stop(){
        clearInterval(this.hungerTimer)
        clearInterval(this.pukeTimer)
        clearInterval(this.yawnTimer)
    }
}

var feedButton = document.getElementById("feed")
var restButton = document.getElementById("rest")
var medicateButton = document.getElementById("medicate")


//create new Tamagotchis
const tama = new Tamagotchis("Bob", "Builder")
const gotchi = new Tamagotchis("Spongebob", "Squarepants")


//test out your Tamagotchies below via console.logs


