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
        this.foodInTummy--;
        console.log("wwwwwaaaaaahhhnnnnnn")
        console.log(this.name + "has current food in my tummy " + this.foodInTummy);
    };
    poop() {
        this.foodInTummy--;
console.log('plop');
console.log(this.name + 'has current food' + this.foodInTummy);
    }
puke() {
    this.health--;
console.log('too much beer hhuuurrrllllll');
console.log(this.name + 'has current health =' + this.health)
};
yawn() {
    this.restedness--;
    console.log("bruh im tired...");
    console.log(this.name + "has current restedness of " + this.restedness)
};
}

//create new Tamagotchis
var deshaun = new Tamagotchi('deshaun', 'gangsta');
var welvin = new Tamagotchi('welvin', 'bottle nose dolphin');

deshaun.cry();
welvin.cry();