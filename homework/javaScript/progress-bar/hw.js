// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    var numericDisplay = document.getElementById("numeric-display").innerHTML = timerValue;
  },
  drawProgressBars: function(timerValue){
    var barWidth = 100 - timerValue;
    var progressBar = document.getElementById('progress-bars').getElementsByClassName('progress-bar')[0].style.width = barWidth + '%';
  },
  drawLitFuses: function(timerValue){
     var fuseLength = timerValue - 2;
     var fuseBurn = document.getElementsByClassName('unburnt')[0].style.width = fuseLength + '%';
     var burntFuseLength = 98 - fuseLength;
     var burntFuse = document.getElementsByClassName('burnt')[0].style.width = burntFuseLength + '%';
  },
  drawCrawlers: function(timerValue){
//     var bugBottomStartPosition = 57;
//     var bugLeftStartPosition = 15;
//     var bugLeftPosition
 
//     var position = top;

//     for (i = 0; i < 100; i++){
//         bugLeftPosition = bugLeftStartPosition + 15
//         if(start = top){
//           start = bottom;
//           bugBottomStartPosition = 57px;
//         } else if (start = bottom){
//           start = top;
//           bugBottomStartPosition = 10px;
//         }
// }

//     var bugStylePosition = document.getElementById('crawlers').getElementsByClassName('crawler-track')[0].getElementsByClassName('crawler')[0].style.position = 'fixed';
//     var bugStyleBottom = document.getElementById('crawlers').getElementsByClassName('crawler-track')[0].getElementsByClassName('crawler')[0].style.bottom =  bugBottomPosition + 'px';
//     var bugStyleLeft = document.getElementById('crawlers').getElementsByClassName('crawler-track')[0].getElementsByClassName('crawler')[0].style.left = bugLeftStartPosition + 'px';
     
  },
  finalCountdown: function(timerValue){
      if (timerValue <= 10){
        var displayColor = document.getElementById("numeric-display").style.color = 'red';
      }
  }
};