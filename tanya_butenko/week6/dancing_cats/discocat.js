//black cat manipulation
var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var rotate = 0;

var button1 = document.getElementById('start-button');
var button2 = document.getElementById('stop-button');
var button3 = document.getElementById('speed-button');


function move() {
  var img = document.getElementById('cat');
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  currentLeft = parseInt(img.style.left);
  return currentLeft;
}

function catWalk() {
  var img = document.getElementById('cat');
  var currentLeft = move();

  // img.setAttribute('width', img.width+2);
  if ((currentLeft > (window.innerWidth-img.width)) || (currentLeft < 0)) {
    rotate = (rotate + 180) % 360;
    movePixels = -movePixels;
    img.style.transform = 'rotateY(' + rotate + 'deg)';
    // img.style.width = img.width-2 + 'px';
  }
}

//start walking black cat
function startCatWalk() {
  stopCatWalk();
  catTimer = window.setInterval(catWalk, delayMs);
}

//speed up black cat
function speedCatWalk(){
  stopCatWalk();
  catTimer = window.setInterval(catWalk, delayMs / 2);
}

// var makeImageBigger = function() {
//   widthCat = window.setInterval(makeImageBigger, 1000);
  
// }
 
//stop black cat 
function stopCatWalk(){
  if (catTimer) {
    window.clearInterval(catTimer);
    catTimer = null;
  }
}

button1.addEventListener('click', startCatWalk);
button2.addEventListener('click', stopCatWalk);
button3.addEventListener('click', speedCatWalk);


//mouse randomly moving around the screen

var mouse;
var randomX = Math.random()*window.innerWidth;
var randomY = Math.random()*window.innerWidth;
var x = 0, y = 0;

function init(){
  mouse = document.getElementById('mouse');
  moveIt();
}

function moveIt() {
  x += (randomX - x) * 0.15;
  y += (randomY - y) * 0.15;
  mouse.style.left = x + 'px';
  mouse.style.top = y + 'px';
  if (Math.abs(x-randomX) < 1) {
     randomX = Math.random()*window.innerWidth;
     randomY = Math.random()*window.innerWidth;
  }
  requestAnimationFrame(moveIt, mouse);
}


//Cat number 2 responds to the keyboard left, right, up, down



var Cat = function(){
  var sadcat = document.getElementById('sadcat');
  var position = parseInt(sadcat.style.left);
  if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)){
        sadcat.style.left -= 10 + 'px';
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)){
        sadcat.style.left += 10 + 'px';
    }

  this.keyboarder = new Keyboarder();

}

var Keyboarder = function() {
  var keyState = {};

  window.onkeydown = function(event) {
    keyState[event.keyCode] = true;
  };

  window.onkeyup = function(event) {
    keyState[event.keyCode] = false;
  };

  this.isDown = function(keyCode){
    return keyState[keyCode] === true;
  };

  this.KEYS = { LEFT:37, RIGHT:39, SPACE:32};
}
