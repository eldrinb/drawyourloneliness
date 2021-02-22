let lon = "'loneliness.'";
let alo = "'alone.'";
let drawings;
let drawing;
let prompts;
let prompt;

let button;
let colourPicker;

var canvas;

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
  //static settings
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('position','fixed');
  background(0);

  cursor(CROSS);

  //global font settings
  fill(255);
  textFont('Courier New');

  //setup prompts for drawing
  refresh();
  
  //setup for colour picker
  changeColour();
  
}

function draw() {
//   //static + randomized prompts
//   fill(255);
//   noStroke();
//   textSize(18);
//   textAlign(LEFT);
//   text('Draw ' + prompt, 50, windowHeight-100);

//   //static message changing depending on the drawing tool
//   textSize(10);
//   text('Using speed-sensitive ' + drawing, 50, windowHeight-80);
}

//FOR DRAWING
function mouseDragged() {  
  //drawing tools
  strokeWeight(0.25);
  //statement to draw if tool is 'squares.'
  if (drawing === 'squares.') {
    //colour picker 
    let val = colourPicker.color();
    fill(val);
    rectMode(CENTER);
    variableRect(mouseX, mouseY, pmouseX, pmouseY);
  }
  //statement to draw if tool is 'circles.'
  if (drawing === 'circles.') {
    //colour picker 
    let val = colourPicker.color();
    fill(val);
    variableCircle(mouseX, mouseY, pmouseX, pmouseY)
  }
  //statement to draw if tool is 'scribbles.'
  if (drawing === 'scribbles.') {
    //colour picker 
    let val = colourPicker.color();
    stroke(val);
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

//FOR 'REFRESH' BUTTON
//function to refresh sketch ---- basically, this is what setup() is supposed to be
function refresh() {
  background(0);
  // background(random(150, 250), random(150, 250), random(150, 250));
  fill(255);
  prompts = [
    'what loneliness looks like to you.',
    'what being alone looks like to you.',
    'what being alone and lonely looks like to you.',
    'what comes to mind when you see the word ' + lon || alo,
    'the moment you felt ' + 'the loneliest.' || 'the most alone.',
    'what you do when you feel ' + 'lonely.' || 'alone.',
    'how loneliness affects you.',
    'how being alone affects you.',
  ];
  prompt = random(prompts);

  //shapes for prompts + drawing
  drawings = ['squares.', 'circles.', 'scribbles.'];
  drawing = random(drawings);

  //static + randomized prompts
  strokeWeight(0.25);
  textSize(15);
  textAlign(LEFT);
  text('Draw ' + prompt, 50, windowHeight-100);

  //static message changing depending on the drawing tool
  textSize(10);
  text('Using speed-sensitive ' + drawing, 50, windowHeight-80);
  
  //STATIC change colour button
  textSize(10);
  button = createButton('Change Colour');
  button.position(250, windowHeight-88);
  button.style('font-family:"Courier New"');
  button.style('font-size:10px');
  button.style('text-align:LEFT');
  button.style('color:white');
  button.style('padding-left:0px');
  button.style('border:none');
  button.style('background-color:black');
  button.style('cursor:CROSSHAIR');
  
  // set up for colour picker
  changeColour();
  
  //refresh button
  textSize(10);
  button = createButton('Refresh');
  button.position(410, windowHeight-88);
  button.mousePressed(refresh);
  button.style('font-family:"Courier New"');
  button.style('font-size:10px');
  button.style('text-align:LEFT');
  button.style('color:white');
  button.style('padding-left:0px');
  button.style('border:none');
  button.style('background-color:black');
  button.style('cursor:POINTER');
  
  //save button
  textSize(10);
  button = createButton('Save');
  button.position(470, windowHeight-88);
  button.mousePressed(saveArtwork);
  button.style('font-family:"Courier New"');
  button.style('font-size:10px');
  button.style('text-align:LEFT');
  button.style('color:white');
  button.style('padding-left:0px');
  button.style('border:none');
  button.style('background-color:black');
  button.style('cursor:POINTER');
  
  //credits button
  textSize(10);
  button = createButton('Built by Eldrin Banares');
  button.position(50, windowHeight-50);
  button.mousePressed(portfolio);
  button.style('font-family:"Courier New"');
  button.style('font-size:10px');
  button.style('text-align:LEFT');
  button.style('color:rgb(150,150,150)');
  button.style('padding-left:0px');
  button.style('border:none');
  button.style('background-color:black');
  button.style('cursor:POINTER');
  

  
}

//FOR 'SAVE' BUTTON
//function to save canvas frame to your designated downloads folder
function saveArtwork() {
  saveCanvas('drawYourLoneliness', 'jpg');
}

//FOR 'BUILT BY ELDRIN BANARES' BUTTON
//function to go to my portfolio
function portfolio(){
  window.open('https://eldrinb.github.io/portfolio/','_blank');
}

//FOR COLOUR PICKER
function changeColour(){
  colourPicker = createColorPicker('#FF0000');
  colourPicker.position(330, windowHeight-90);
  colourPicker.size(60,17);
  colourPicker.style('appearance: none;');
  colourPicker.style('padding:0px');
  colourPicker.style('margin:0px');
  colourPicker.style('border:none');
  colourPicker.style('border-width: 0px');
  colourPicker.style('cursor:POINTER');
  colourPicker.style('background:none');
}

//~~~~~~~~~~~~~~DEAD FUNCTION~~~~~~~~~~~~
// //FOR 'CHANGE COLOUR' SLIDER
// //function to add slider that changes the drawing tool's fill
// function changeFill() {
//   colorMode(HSB);
//   slider = createSlider(0, 360, 0, 45);
//   slider.position(150, 133);
//   //slider css changes
//   slider.style('width:80px');
//   slider.style('height:5px');
//   slider.style('cursor:pointer');
  
//   // textAlign(LEFT);
//   // text('Change Colour', 50, 140);
// }

// ~~~~~~~~~~~~~~DEAD FUNCTION~~~~~~~~~~~~
// //function to show what colour the slider/shapes are using
// function colourBox(){
//   noStroke();
//   let val = slider.value();
//   fill(val, 100, 100, 1);
//   rect(135,132,10,10);
// }