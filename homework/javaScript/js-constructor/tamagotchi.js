console.log('tamagotchi file is loaded');


//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }
    cry() {
        foodInTummy--;
        console.log("wwwwwaaaaaahhhnnnnnn")
        console.log(this.name + "has current food in my tummy " + this.foodInTummy);
    };
}

//create new Tamagotchis
var deshaun = new Tamagotchi('deshaun', 'gangsta');
var welvin = new Tamagotchi('welvin', 'bottle nose dolphin');

deshaun.cry();
welvin.cry();