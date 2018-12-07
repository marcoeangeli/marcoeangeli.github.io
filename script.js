var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 0;
var dy = 0;
var dbr = 1;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  if (y + dy < 0 || y + dy > canvas.height) {
    dy = -dy
  }
  if (x + dx < 0 || x + dx > canvas.width) {
    dx = -dx
  }
  if (rightPressed) {
    dx = 2
  }
  if (leftPressed){
    dx = -2
  }
  if (upPressed) {
    dy = -2
  }
  if (downPressed){
    dy = 2
  }
  x += dx;
  y += dy;
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}

document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", keyDownHandler, false);
setInterval(draw, 10);
