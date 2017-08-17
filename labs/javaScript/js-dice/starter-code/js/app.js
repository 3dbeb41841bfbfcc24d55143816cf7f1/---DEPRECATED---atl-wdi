/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

window.onload = function() {
    var buttonId = document.getElementById('roll-dice');
    var firstDieId = document.getElementById('first-die');
    // console.log(firstDieId);
    var secondDieId = document.getElementById('second-die');
    // console.log(secondDieId);

    buttonId.addEventListener('click', selectDice);

    function selectDice() {
        var randomDiceOne = (Math.floor((Math.random() * 6)) + 1);
        // console.log(randomDiceOne);
        var randomDiceTwo = (Math.floor((Math.random() * 6)) + 1);
        // console.log(randomDiceTwo);

        firstDie = "dice-" + randomDiceOne;
        secondDie = "dice-" + randomDiceTwo;
        // console.log(firstDie);
        // console.log(secondDie);

        firstDieId.className = firstDie;
        secondDieId.className = secondDie;
    };
};



