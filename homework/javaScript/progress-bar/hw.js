var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').textContent = timerValue;
  },
  
  drawProgressBars: function(timerValue){
    var timeElapsed = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%';
  },
  drawLitFuses: function(timerValue){

    var percentUnburnt = timerValue/100;
    document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt*98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%';
  },
  drawCrawlers: function(timerValue){
    var timeElapsed = 100 - timerValue;
    if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + 'px';
  }
};
