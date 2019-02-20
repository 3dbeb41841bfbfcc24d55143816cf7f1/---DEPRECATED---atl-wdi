// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function () {
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
  advanceTenMillisecs: function () {
    // Your Code Here
    this.millisecs += 10;
    if (this.millisecs >= 1000) {
      this.millisecs -= 1000;
      this.secs++;
    }


  },
  reset: function () {
    // Your Code Here
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];
  },
  start: function () {
    // Your Code Here
    if (!this.isRunning) {
      this.isRunning = true;
      this.tickClock();
    }
  },
  stop: function () {
    // Your Code Here
    this.isRunning = false;
  },
  lap: function () {
    // Your Code Here
    if (this.isRunning) {
      this.laps.push({
        mins: this.mins,
        secs: this.secs,
        millisecs: this.millisecs
      })
    }
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function (mins, secs, millisecs) {
    // Your Code Here
    document.getElementById('mins').innerHTML.ViewHelpers.zeroFill(mins, 2);
    document.getElementById('secs').innerHTML.ViewHelpers.zeroFill(secs, 2);
    document.getElementById('mins').innerHTML.ViewHelpers.zeroFill(millisecs / 10, 2);
  },
  updateLapListDisplay: function (laps) {
    // Your Code Here
    var laps = Stopwatch.laps;
    var laplist = document.getElementById('lap-list');
    laplist.innerHTML = '';
    for (var i = 0; i < laps.length; i++) {
      laplist.innerHTML = + "\
      <li>" +
        ViewHelpers.zeroFill(laps[i].mins, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].secs, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].millisecs / 10, 2) +
        "<li>";
    }
  },
};
const ViewHelpers = {
  zeroFill: function (number, length) {
    // Your Code Here
    var str = number.toString();
    let numZeroes = Math.max(length - str.length, 0);
    for (var i = 0; i < (length - str.length); i++) {
      str = '0' + str;
    }
    return str;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function () {
    // Your Code Here
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function () {
    // Your Code Here
    if (!Stopwatch.isRunning) { Stopwatch.start(); }
  },
  handleClickStopReset: function () {
    // Your Code Here
    if (Stopwatch.isRunning) { Stopwatch.stop(); }
    else {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
  },
  handleClickLap: function () {
    // Your Code Here
    if (Stopwatch.isRunning) {
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
  }
};

window.onload = function () {
  // Attach AppController methods to the DOM as event handlers here.
};
document.getElementById('start').onclick = AppController.handleClickStart;
document.getElementById('lap').onclick = AppController.handleClickLap;
document.getElementById('stop').onclick = AppController.handleClickStopReset;