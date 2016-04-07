// ============== Variables ==============

// Spacecraft
var x = 700; // positon x of the spacecraft
var y = 280; // positon x of the spacecraft
var spaceW = 95; // spacecraft width
var spaceH = 40; // spacecraft height
var dx = 4; // speed at x axcis
var dy = 3; // speed at x axcis
var spacecraftColor = '#FFFF00';

// Canvas
var ctx = $('#canvas')[0].getContext("2d");; // context
var WIDTH = $("#canvas").width(); // width of canvas
var HEIGHT = $("#canvas").height(); // height of canvas

// Key control
var up = false; // pressed right arrow
var bottom = false; // pressed left arrow
var left = false; // pressed left arrow
var right = false; // pressed right arrow

// enemy
var enemyInMove = false;
var enemyR = 30;
var enemyX = -20;
var enemyY;
var edx = 5;

// enemy2
var enemyInMove2 = false;
var enemyR2 = 30;
var enemyX2 = -520;
var enemyY2;
var edx2 = 5;

// variable to interval
var intervalGame;

// time
var cykl = 0;
var seconds = 0;


// ============== Control by keys ==============

// set up or bottom if the up or down keys are down
function onKeyDown(evt) {
  if (evt.keyCode == 38) up = true;
  else if (evt.keyCode == 40) bottom = true;
  else if (evt.keyCode == 39) right = true;
  else if (evt.keyCode == 37) left = true;
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
  if (evt.keyCode == 38) up = false;
  else if (evt.keyCode == 40) bottom = false;
  else if (evt.keyCode == 39) right = false;
  else if (evt.keyCode == 37) left = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);



// ============== Code ==============

window.onload = init;

function init() { // start the game
  intervalGame = setInterval(function(){ draw() }, 10);
}

function draw() {
  clear();
  cykl+=10;
  if (cykl%1000===0) {++seconds; console.log(seconds);}
  rect(0,0,150,50);
  ctx.font = 'italic 20pt Calibri';
  ctx.fillStyle = 'white';
  ctx.fillText('Time: ' + seconds, 35, 35);
  spacecraftDraw(x,y);
  // enemy 1
  if(enemyInMove===false) {
    enemyY = Math.floor(Math.random()*(HEIGHT-enemyR-20)+20);
    enemyInMove = true;
  } else {
    enemyX+=edx;
    if (enemyX>WIDTH) {
      enemyX = -enemyR;
      enemyInMove = false;
    }
  }
  // enemy 2
  if(enemyInMove2===false) {
    enemyY2 = Math.floor(Math.random()*(HEIGHT-enemyR2-30)+30);
    enemyInMove2 = true;
  } else {
    enemyX2+=edx2;
    if (enemyX2>WIDTH) {
      enemyX2 = -enemyR2;
      enemyInMove2 = false;
    }
  }
  enemyDraw(enemyX,enemyY,enemyR);
  enemyDraw(enemyX2,enemyY2,enemyR2);
  if(cykl%10000===0) {
    edx+=1;
    edx2+=1;
  } 
  if( (enemyX+enemyR > x+20 && enemyX-enemyR < x+spaceW && enemyY+enemyR > y-spaceH/2 && enemyY-enemyR < y+spaceH/2) ) {
    clearInterval(intervalGame);
    gameOver();
  }
  if( (enemyX2+enemyR2 > x+20 && enemyX2-enemyR2 < x+spaceW && enemyY2+enemyR2 > y-spaceH/2 && enemyY2-enemyR2 < y+spaceH/2) ) {
    clearInterval(intervalGame);
    gameOver();
  }
  if (up==true && y>spaceH) y-=dy;
  else if (bottom==true && y<HEIGHT-spaceH) y+=dy;
  else if (right==true && x<WIDTH-spaceW-5) x+=dx;
  else if (left==true && x>5) x-=dx;
  
}