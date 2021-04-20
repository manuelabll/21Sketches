function setup(){

    createCanvas(700, 700,WEBGL);
}

function draw(){

    background(0);
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;

    ambientLight(0);
    directionalLight(255, 64, 124, locX, locY, 0);
    pointLight(123, 66, 255, locX, locY, 250);
    specularMaterial(0);
    noStroke(0);
    rotateY(50);

///// (left I)

  push();
  translate(-150, 0, 0);
  //noFill();
  //stroke(255);
  box(70, 300, 70);
  

  pop();
  

//// (center /)

  push();
  translate(85, 0, 0);
  //noFill();
  rotate(35)
  //stroke(255);

  box(70, 300, 70);
  
  
 
  pop();

 //// (center \)

  push();
  translate(-85, 0, 0);
  //noFill();
  rotate(-35)
  //stroke(255);

  box(70, 300, 70);
 
  pop();
 

///// (right I)

  push();
  translate(150, 0, 0);
  //noFill();
  //stroke(255);

  box(70, 300, 70);
  
  pop();



///// (bottom)

  push();
  translate(0, 130, 0);
  //noFill();
  //stroke(255);

  box(110, 40, 70);
  
  pop();

}

function mousePressed() {

    saveCanvas("day14", "png")
}  