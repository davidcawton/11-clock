(function() {
  var time = document.querySelector('.time');
  var backgroundColor = document.querySelector('body');

  window.setInterval(() => {
    var d = new Date();
    var nowHour = d.getHours();
    var nowMin = d.getMinutes();
    var nowSec = d.getSeconds();
    var now = `${nowHour}:${nowMin}:${nowSec}`;
    time.innerHTML = now;

    var secColor = toColorRange(nowSec, 60);
    var minColor = toColorRange(nowMin, 60);
    var hourColor = toColorRange(nowHour, 60);
    console.log(secColor);
    console.log(minColor);
    console.log(hourColor);
    backgroundColor.style.background = `rgb(${secColor}, ${minColor}, ${hourColor})`;

  }, 1000);

  var toColorRange = (number, base) => {
    return number / base * 255;
  };

})();
