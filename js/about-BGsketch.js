console.log("hello this is the js file for the bg sketch. hope it works")

let drawings;
let drawing;

var canvas;

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
function setup() {
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
    //colour picker 
    fill((mouseX-(windowWidth/3)),(mouseY-(windowHeight/3)),100);
    // fill(random(100),random(100),random(100));
    rectMode(CENTER);
    variableRect(mouseX, mouseY, pmouseX, pmouseY);
  }
  //statement to draw if tool is 'circles.'
  if (drawing === 'circles.') {
    //colour picker
    fill((mouseX-(windowWidth/3)),(mouseY-(windowHeight/3)),100);
    // fill(random(100),random(100),random(100));
    variableCircle(mouseX, mouseY, pmouseX, pmouseY)
  }
  //statement to draw if tool is 'scribbles.'
  if (drawing === 'scribbles.') {
    //colour picker 
    stroke((mouseX-(windowWidth/3)),(mouseY-(windowHeight/3)),100);
    // stroke(random(100),random(100),random(100));
    //size changing
    strokeWeight(random(3, 5));
    variableLine(mouseX, mouseY, pmouseX, pmouseY)
  }
}

//functions for shapes that are speed sensitive
function variableCircle(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  noStroke();
  ellipse(x, y, speed, speed);
}
function variableRect(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  noStroke();
  rect(x, y, speed, speed);
}
function variableLine(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  strokeWeight(speed);
  line(x,y,px,py);
}

