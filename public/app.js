(function() {
  var time = document.querySelector('.time');

  window.setInterval(() => {
    var d = new Date();
    console.log(d);
    var nowHour = d.getHours();
    var nowMin = d.getMinutes();
    var nowSec = d.getSeconds();
    var now = `${nowHour}:${nowMin}:${nowSec}`;
    time.innerHTML = now;
  }, 1000);

})();
