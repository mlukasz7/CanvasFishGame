// ============== Draw Spacecraft ==============
function spacecraftDraw(x,y) { 
  // draw spacecraft
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x+30, y-20); //line 1
  ctx.lineTo(x+95, y); // line 2
  ctx.lineTo(x+30, y+20); // line 3
  ctx.lineTo(x, y); // line 4
  ctx.lineJoin = 'round';
  ctx.closePath();
  // add linear gradient
  var grd = ctx.createLinearGradient(x, y, x+spaceW, y+spaceH);//begin x,y, end x, y
  // light blue
  grd.addColorStop(0, 'yellow');   
  // dark blue
  grd.addColorStop(0.8, 'red');
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x+95, y);
  ctx.lineTo(x+95, y-20); //line 1
  ctx.lineTo(x+50, y); //line 2
  ctx.lineTo(x+95, y+20);
  ctx.lineTo(x+95, y);
  ctx.lineJoin = 'round';
  // add linear gradient
  var grd = ctx.createLinearGradient(x, y, x+spaceW, y+spaceH);//begin x,y, end x, y
  // light blue
  grd.addColorStop(0, 'yellow');   
  // dark blue
  grd.addColorStop(0.8, 'red');
  ctx.fillStyle = grd;
  ctx.fill();
  // add eye
  ctx.beginPath();
  ctx.arc(x+20, y-5, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
}

// ============== Draw enemy ==============
function enemyDraw(x,y,r) { // ball
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = '#1E88E5';
  ctx.fill();
}

// ============== Timer background ==============
function rect(x,y,w,h) { //
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fill();
}

// ============== Clear canvas ==============
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// ============== GameOver ==============
function gameOver() {
  ctx.font = 'bold 70pt Calibri';
  ctx.fillStyle = 'red';
  ctx.fillText('Game Over', 170, 200);
}
