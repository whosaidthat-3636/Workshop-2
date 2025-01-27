let counter = 0; 
let countInterval;

function setup() {
  createCanvas(400, 400);
  background(0);

  setTimeout(() => {
    countInterval = setInterval(() => drawHeart(random(width), random(height), random(20, 50)), 2000);
  }, 2000);
}

function drawHeart(x, y, size) {
  fill(random(255), random(255), random(255));
  noStroke();
  beginShape();
  vertex(x, y); 
  bezierVertex(x + size / 2, y - size, x + size, y, x, y + size * 0.8);
  bezierVertex(x - size, y, x - size / 2, y - size, x, y);
  endShape(CLOSE);

  counter++;
  if (counter > 5) {
    clearInterval(countInterval); 
  }
}

function mousePressed() {
  counter = 0; 
  clearInterval(countInterval); 

  setTimeout(() => {
    countInterval = setInterval(() => drawHeart(random(width), random(height), random(20, 50)), 3000);
  }, 3000);
}
