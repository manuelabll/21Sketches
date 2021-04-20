function setup(){

    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}

function draw(){

    background(0);
    strokeWeight(2);
    rotateX(-90);
    rotateY(0);
    rotateZ(mouseX);
    strokeWeight(2);

    //
    push();
    stroke(255, 97, 221);
    noFill();
    translate(150, 0, 0);
    box(70, 70, 350);

    stroke(0);
    fill(255, 97, 221);
    box(35, 35, 340);
    pop();

    //
    push();
    translate(-150, 0, 0);
    stroke(255, 97, 221);
    noFill();
    box(70, 70, 350);

    stroke(0);
    fill(255, 97, 221);
    box(35, 35, 340);
    pop();

    //
    push();
    translate(0, 0, -50);
    stroke(255, 97, 221);
    noFill();
    box(70, 70, 70);

    stroke(0);
    fill(255, 97, 221);
    box(35, 35, 60);
    pop();

    //
    push();
    translate(75, 0, -100);
    stroke(255, 97, 221);
    noFill();
    box(70, 70, 70);

    stroke(0);
    fill(255, 97, 221);
    box(35, 35, 60);
    pop();

    //
    push();
    translate(-75, 0, -100);
    stroke(255, 97, 221);
    noFill();
    box(70, 70, 70);

    stroke(0);
    fill(255, 97, 221);
    box(35, 35, 60);
    pop();

    

}

/* function mousePressed() {

    saveCanvas("day11", "png")
}   */