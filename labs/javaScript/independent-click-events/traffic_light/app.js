window.onload = function() {
  var stopButton = document.querySelector('#stopButton');
  var slowButton = document.querySelector('#slowButton');
  var goButton = document.querySelector('#goButton');

  var stopLight = document.querySelector('#stopLight');
  var slowLight = document.querySelector('#slowLight');
  var goLight = document.querySelector('#goLight');

  stopButton.addEventListener('click', trafficLight.illuminateRed);
  slowButton.addEventListener('click', trafficLight.illuminateYellow);
  goButton.addEventListener('click', trafficLight.illuminateGreen);
}


var trafficLight = {
  illuminateRed: function(event) {
    trafficLight.clearLights();

    stopLight.style.background = 'red';
    slowLight.style.background = 'black';
    goLight.style.background = 'black';
  },

  illuminateYellow: function(event) {
    trafficLight.clearLights();

    slowLight.style.background = 'yellow';
    stopLight.style.background = 'black';
    goLight.style.background = 'black';
  },

  illuminateGreen: function(event) {
    trafficLight.clearLights();

    goLight.style.background = 'green';
    stopLight.style.background = 'black';
    slowLight.style.background = 'black';
  },
  
  clearLights: function() {
    stopLight.style.background = 'black';

  }
}
