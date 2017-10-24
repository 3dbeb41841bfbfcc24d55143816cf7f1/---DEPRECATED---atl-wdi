// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    this.millisecs += 10;
    if (this.millisecs >= 1000) {
      this.millisecs -= 1000;
      this.secs++; //When milliseconds hit 1k, advance seconds by 1
    }
    if (this.secs >= 60) {
      this.secs -= 60; //When seconds hit 60, advance mins by 1
      this.mins++;
    }
  },
  reset: function() { //When the reset button is pushed, all values revert to 0
    this.mins = 0
    this.secs = 0
    this.millisecs = 0
  },
  start: function() {
    if (!this.isRunning) {
      this.isRunning = true
      this.tickClock(); //If the stopwatch is NOT running, the start button starts the clock
    }
  },
  stop: function(){
    this.isRunning = false; //Sets the value of isRunning to false
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
  //

  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
   var string = number.toString();
   let zeros = Math.max(length - string.length, 0);
   for (var i = 0; i < (length - string.length); i++) {
     string = "0" + string;
   }
   return string;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs)
    //runs the ViewEngine.updateTimeDisplay methods, taking the parameters of the mins, secs 
    //and millisecs values from the Stopwatch object

  },//Updates 
  handleClickStart: function() {
    if (!Stopwatch.isRunning) {
      Stopwatch.start();
    }
  },
  //If the stopwatch is not running and the start button is pushed, start the clock
  handleClickStopReset: function(){
    if (Stopwatch.isRunning) {
      Stopwatch.stop();
    }
    //If the stopwatch is running and the stop button is pressed, the clock stops.
    else {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
    //If it was already stopped, the time display is set to zero. 
    }
  },
  handleClickLap: function(){
    // Your Code Here
  }
}; 

window.onload = function(){
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
};//Sets the event listeners for the app, listens for clicks on the stop and start buttons
