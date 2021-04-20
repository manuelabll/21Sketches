function setup(){
    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}

function draw(){

    background(0);

///// (left I)

  push();
  translate(-150, 0, 0);
  noFill();
  //rotateY(frameCount * 1);
  //stroke(random(255));

  stroke(255,0,0);
  box(70, 300, 70);
  box(40, 210, 40);

  stroke(0,255,0);
  box(60, 270, 60);
  box(30, 180, 30);

  stroke(0,0,255);
  box(50, 240, 50);
  box(20, 150, 20);

  pop();
  

//// (\)

  push();
  translate(-70, -45, 0);
  noFill();
  rotate(130)
  //rotateY(frameCount * 1);
  //stroke(random(255));

  stroke(255, 0,0);
  box(70, 250, 70);
  box(40, 160, 40);

  stroke(0,255,0);
  box(60, 220, 60);
  box(30, 130, 30);

  stroke(0,0,255);
  box(50, 190, 50);
  box(20, 100, 20);
  
 
  pop();

///// (right I)

  push();
  translate(150, 0, 0);
  noFill();
  //rotateY(frameCount * 1);
  //stroke(random(255));

  stroke(255,0,0);
  box(70, 300, 70);
  box(40, 240, 40);
  
  stroke(0,255,0);
  box(60, 270, 60);
  box(30, 210, 30);

  stroke(0,0,255);
  box(20, 190, 20);
  box(50, 240, 50);
  
  pop();

//// (/)

  push();
  translate(70, -45, 0);
  noFill();
  rotate(-130)
  //rotateY(frameCount * 1);
  //stroke(random(255));

  stroke(255,0,0);
  box(70, 250, 70);
  box(40, 160, 40);

  stroke(0,255,0);
  box(60, 220, 60);
  box(30, 160, 30);

  stroke(0,0,255);
  box(50, 190, 50);
  box(20, 160, 20);


}

function mousePressed() {

    saveCanvas("day8", "png")
}  