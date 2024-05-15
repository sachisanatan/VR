AFRAME.registerComponent('collision-detector', {
  init: function () {
    var el = this.el;

    el.addEventListener('collide', function (e) {
      var targetElement = e.detail.target;

      if (targetElement.classList.contains('water')) {
        targetElement.parentNode.removeChild(targetElement);
        var score = parseInt(document.getElementById('score').getAttribute('value').split(":")[1]);
        score += 10;
        document.getElementById('score').setAttribute('value', 'Score: ' + score);
      }
    });
  }
});

// Start Timer
var timerText = document.getElementById('timer');
var gameOver = document.getElementById('game-over');
var finalScoreText = document.getElementById('final-score');

var score = 0;
var time = 60;

var timerInterval = setInterval(function() {
  if (time > 0) {
    time--;
    timerText.setAttribute('value', 'Time: ' + time);
  } else {
    // Game Over
    clearInterval(timerInterval);
    gameOver.setAttribute('visible', 'true');
    finalScoreText.setAttribute('value', 'Final Score: ' + score);
  }
}, 1000);
