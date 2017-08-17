console.log('tamagotchi file is loaded');

class Tamagotchi {
  constructor(name, creatureType){
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
  };
  puke() {
    this.health--;
    console.log('Bleeeeh! Sick!!!!!!');
    console.log(this.name + ' has current health = ' + this.health);
  };
  yawn(){
    this.restedness--;
    console.log('Yaaaawwwwn! So tired');
    console.log(this.name + ' has current restedness = ' + this.restedness);
  };
  start(){
    console.log("Starting " + this.name);
    var self = this;
    this.hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      self.puke();
    }, 25000);
  };
  stop(){
    console.log("Stopping " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  };
} 

var bob = new Tamagotchi('bob', 'blah')
bob.start();