window.onload = function() {
    var button = document.getElementById("button1");
    button.addEventListener("click", function() {
        alert("Button One!");
    });

    var nextButton = document.getElementById("button2");
    var p = document.createElement("p");
    nextButton.addEventListener("click", function() {
        p.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
        document.body.appendChild(p);
    });

    var buttonOfDeath = document.getElementById("button3");
    buttonOfDeath.addEventListener("click", function() {
        document.body.removeChild(p);

    });
}

