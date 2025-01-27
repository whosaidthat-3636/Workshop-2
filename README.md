# Workshop-2
Link: [https://whosaidthat-3636.github.io/Workshop-2/]

## Tasks
- Make a p5.js sketch using the setTimeout and setInterval functions.
- Experiment with at least one new item from the from the p5.js documentation

## Documentation
### 1) Draw shape
- I was looking to find how to make shapes that weren't already a command as a 2D primitive
- Came across a video by The Coding Train about [customized shapes](https://www.youtube.com/watch?v=76fiD5DvzeQ)
    * About curveVertex
 
### 2) Attempt 1
```
let counter = 0; 
let countInterval = setInterval(drawHeart, 2000);

function setup() {
  createCanvas(400, 400);
  background(0);
}

function drawHeart(x, y, size) {
  fill(random(255), random(255), random(255));
  noStroke();
  beginShape();
  curveVertex(x, y); 
  curveVertex(x - size / 2, y - size / 2); 
  curveVertex(x - size, y - size / 2); //
  
  curveVertex(x + size, y - size / 2); 
  curveVertex(x + size / 2, y - size / 2); 
  curveVertex(x, y); // Bottom point of the heart
  endShape(CLOSE);
  drawHeart(random(width), random(height), random(20, 50), 2000);

  counter++;
  if (counter > 5) {
    clearInterval(countInterval); 
    counter = 0;
  }
}

function mousePressed() {
   countInterval = setInterval(drawHeart, 2000);
}
```
<img width="201" alt="image" src="https://github.com/user-attachments/assets/2a37d621-64bf-408a-b9dc-7b5aa0fa8ddc" />

- Outcome was a huge mess
- p5.js states that the curveVertex was expecting numbers for its parameters
- And "maximum call stack size exceeded"
