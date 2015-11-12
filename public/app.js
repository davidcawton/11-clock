(function() {
  var time = document.querySelector('.time');
  var colorSpan = document.querySelector('.color');
  var backgroundColor = document.querySelector('body');
  var bar = document.querySelector('.color__bar');

  window.setInterval(() => {
    var d = new Date();
    var nowHour = padZeros(d.getHours());
    var nowMin = padZeros(d.getMinutes());
    var nowSec = padZeros(d.getSeconds());
    var now = `${nowHour}:${nowMin}:${nowSec}`;
    time.innerHTML = now;

    var secColor = toColorRange(nowSec, 60);
    var minColor = toColorRange(nowMin, 60);
    var hourColor = toColorRange(nowHour, 60);

    var colorVal = `rgb(${secColor}, ${minColor}, ${hourColor})`;

    backgroundColor.style.background = colorVal;
    colorSpan.innerHTML = colorVal;
    bar.style.width = (nowSec * 5  + 'px');
  }, 1000);

  var toColorRange = (number, base) => {
    return Math.floor(number / base * 255);
  };

  function padZeros(time) {
     if (time < 10) {
       return '0' + time;
     }

     return time;
   }

})();
