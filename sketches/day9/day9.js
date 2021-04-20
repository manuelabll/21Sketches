let r, g, b;
let rs, gs, bs;
let s;

function setup() {

  createCanvas(700, 700);
  r = random(255);
  g = random(255);
  b = random(255);
  rs = random(255);
  gs = random(255);
  bs = random(255);
  s = 0;


}

function draw() {

  background(0);

  push();
  fill(255);
  noStroke();
  textSize(16);
  textStyle(NORMAL);
  textAlign(LEFT);
  text("Drag the mouse to control the stroke weight ", 30, 600);
  text("Click to change the fill color", 30, 620);
  text("Double click to change the stroke fill color", 30, 640);
  text("Hold to change to bold", 30, 660);
  pop();

  textSize(400);
  textAlign(CENTER);
  strokeWeight(s);
  stroke(rs, bs, gs);
  fill(r, b, g);
  text("M", 350, 450);



  if (mouseIsPressed) {
    textStyle(BOLD);
  } else {
    textStyle(NORMAL);
  }



}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);

}

function mouseDragged() {
  s = s + 1;
  if (s > 20) {
    s = 0;
  }
}

function doubleClicked() {
  rs = random(255);
  gs = random(255);
  bs = random(255);
}



