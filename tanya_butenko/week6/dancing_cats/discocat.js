var movePixels = 10;
var delayMs = 50;
var catTimer = null;

var button1 = document.getElementById('start-button');
var button2 = document.getElementById('stop-button');
var button3 = document.getElementById('speed-button');

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  // img.setAttribute('width', img.width+2);
  img.style.left = (currentLeft + movePixels) + 'px';
  currentLeft = parseInt(img.style.left);
  img.style.transform;
  if ((currentLeft > (window.innerWidth-img.width)) || (currentLeft < 0)) {
    movePixels = -movePixels;
    img.style.transform = 'rotateY(180deg)';
    // img.style.width = img.width-2 + 'px';
  } else if (currentLeft === (window.innerWidth/2)) {
    img.style.transform = 'rotateY(180deg)';
  }
}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function speedCatWalk(){
  speedCat = window.setInterval(catWalk, delayMs + 10);
}

// var makeImageBigger = function() {
//   widthCat = window.setInterval(makeImageBigger, 1000);
  
// }
  
function stopCatWalk(){
  stopCat = window.clearInterval(catTimer);
  // stopCatWidth = window.clearInterval(widthCat);
}

button1.addEventListener('click', startCatWalk/*, makeImageBigger*/);
button2.addEventListener('click', stopCatWalk);
button3.addEventListener('click', speedCatWalk);

// var Cat = function(){
//   this.keyboarder = new Keyboarder();
// }

// Cat.prototype = {
//   update: function(){
//     if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)){
//         img.style.left -= 10 + 'px';
//     } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)){
//         img.style.left += 10 + 'px';
//     }
//   }
// };

// var Keyboarder = function() {
//   var keyState = {};

//   window.onkeydown = function(event) {
//     keyState[event.keyCode] = true;
//   };

//   window.onkeyup = function(event) {
//     keyState[event.keyCode] = false;
//   };

//   this.isDown = function(keyCode){
//     return keyState[keyCode] === true;
//   };

//   this.KEYS = { LEFT:37, RIGHT:39, SPACE:32};
// }
