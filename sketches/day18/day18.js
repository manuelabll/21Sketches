function setup() {

    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}

function draw() {

    background(0);
    noFill();
    stroke(219, 179, 0);
    rotateY(frameCount * 1);

    //center
    
    push();
    translate(0,0);
    rotate(90);
    torus(40, 10);
    pop();

    // left

    push();
    translate(-40,-40);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(-80,-80);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(-130,-130);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(-180,-130);
    rotate(90);
    torus(40, 10);
    pop();

    /// 

    push();
    translate(-150,-60);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(-150,-10);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(-150,40);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(-150,90);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(-150,140);
    rotate(90);
    torus(40, 10);
    pop();


    // right 

    push();
    translate(40,-40);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(80,-80);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(130,-130);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(180,-130);
    rotate(90);
    torus(40, 10);
    pop();

    ////

    push();
    translate(150,-60);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(150,-10);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(150,40);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(150,90);
    rotate(90);
    torus(40, 10);
    pop();

    push();
    translate(150,140);
    rotate(90);
    torus(40, 10);
    pop();

    
}