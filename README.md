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
- My aim was to create a heart shape

### 2) Interval
- Set to appear max 6 before next interval
```
  counter++;
  if (counter > 5) {
    clearInterval(countInterval); 
  }
}
```

### 3) Attempt 1
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
  curveVertex(x - size, y - size / 2); 
  
  curveVertex(x + size, y - size / 2); 
  curveVertex(x + size / 2, y - size / 2); 
  curveVertex(x, y); 
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

### 4) Attempt 2
- I was mosty confused at this point and wasn't sure how it got to that extent
- So I broke it down by focusing on fixing the shape first
- I came across this (sketch)[https://editor.p5js.org/hshen17/sketches/TWojLso1r] that made a heart and I followed along
  *Used bezierVertex rather than curveVertex
- bezierVertex vs. curveVertex
  * both curved segments to custom shapes
  * bezierV is guided by control points
  * curveV connects the points only
```
function drawHeart(x, y, size) {
  fill(random(255), random(255), random(255));
  noStroke();
  beginShape();
  vertex(x, y); 
  bezierVertex(x + size / 2, y - size, x + size, y, x, y + size * 0.8);
  bezierVertex(x - size, y, x - size / 2, y - size, x, y);
  endShape(CLOSE);
  drawHeart(random(width), random(height), random(20, 50), 2000);
```
- However, this still doesn not work and has the same overwhelming and error as the previous attempt
- Only the shape has been corrected

### 5) Correction
- Admittedly I was stuck entirely and didn't know how to proceed
- I referred to ChatGPT for help with the prompt "How should I fix this code as it keeps crashing?"
- Here is the breakdown I've learned
  * drawHeart requires parameters which were missing
  * () => is the equivalent of function ()
```
// incorrect
let counter = 0; 
let countInterval = setInterval(drawHeart, 2000);

// correct
let counter = 0; 
let countInterval;

function setup() {
  createCanvas(400, 400);
  background(0);
  countInterval = setInterval(() => drawHeart(random(width), random(height), random(20, 50)), 2000);
}
```
- Resets the loop
```
function mousePressed() {
  counter = 0; 
  clearInterval(countInterval); 
  countInterval = setInterval(() => drawHeart(random(width), random(height), random(20, 50)), 3000);
}
```




