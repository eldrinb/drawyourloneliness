console.log("hello this is the bg sketch for the intro. hope it works")

let drawings;
let drawing;

var canvas;

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
function setup() {
  frameRate(4);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.style('position','fixed');
  background(0);
  //shapes for prompts + drawing
  drawings = ['squares.', 'circles.', 'scribbles.'];
  drawing = random(drawings);
}

function draw() {
  //drawing tools
  //statement to draw if tool is 'squares.'
  if (drawing === 'squares.') {
    noStroke();
    //colour picker 
    fill((random(1000)-(windowWidth/3)),(random(1000)-(windowHeight/3)),100);
    // fill(random(100),random(100),random(100));
    rectMode(CENTER);
    rect(random(0,windowWidth), random(0,windowHeight), random(20,100));
  }
  //statement to draw if tool is 'circles.'
  if (drawing === 'circles.') {
    noStroke();
    //colour picker
    fill((random(1000)-(windowWidth/3)),(random(1000)-(windowHeight/3)),100);
    circle(random(0,windowWidth), random(0,windowHeight), random(20,100));
  }
  //statement to draw if tool is 'scribbles.'
  if (drawing === 'scribbles.') {
    noFill();
    //colour picker 
    stroke((random(1000)-(windowWidth/3)),(random(1000)-(windowHeight/3)),100);
    //size changing
    strokeWeight(random(3, 5));
    bezier(random(0,windowWidth/2), height/2, random(0,width), random(0,height), random(0,width), random(0,height), random(windowWidth/2,windowWidth), height/2);
  }
}

// //functions for shapes that are speed sensitive
// function variableCircle(x, y, px, py) {
//   let speed = abs(x - px) + abs(y - py);
//   noStroke();
//   ellipse(x, y, speed, speed);
// }
// function variableRect(x, y, px, py) {
//   let speed = abs(x - px) + abs(y - py);
//   noStroke();
//   rect(x, y, speed, speed);
// }
// function variableLine(x, y, px, py) {
//   let speed = abs(x - px) + abs(y - py);
//   strokeWeight(speed);
//   line(x,y,px,py);
// }

