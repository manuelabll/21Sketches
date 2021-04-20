function setup() {

    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}

function draw() {

    background(0);
    noFill();
    stroke(128, 0, 255);
    rotateY(frameCount * 1);

    //center
    
    push();
    translate(0,0);
    rotateY(90);
    torus(40, 10);
    pop();

    // left

    push();
    translate(-40,-40);
    rotateY(90);
    torus(40, 10);
    pop();

    push();
    translate(-80,-80);
    rotateY(90);
    torus(40, 10);
    pop();

    push();
    translate(-130,-130);
    rotateY(90);
    torus(40, 10);
    pop();

    push();
    translate(-180,-130);
    rotateY(90);
    torus(40, 10);
    pop();

    /// 

    push();
    translate(-150,-60);
    rotateX(90);
    torus(40, 10);
    pop();

    push();
    translate(-150,-10);
    rotateX(90);
    torus(40, 10);
    pop();

    push();
    translate(-150,40);
    rotateX(90);
    torus(40, 10);
    pop();

    push();
    translate(-150,90);
    rotateX(90);
    torus(40, 10);
    pop();

    push();
    translate(-150,140);
    rotateX(90);
    torus(40, 10);
    pop();


    push();
    translate(-150,200);
    rotateX(90);
    torus(40, 10);
    pop();

    // right 

    push();
    translate(40,-40);
    rotateY(90);
    torus(40, 10);
    pop();

    push();
    translate(80,-80);
    rotateY(90);
    torus(40, 10);
    pop();

    push();
    translate(130,-130);
    rotateY(90);
    torus(40, 10);
    pop();

    push();
    translate(180,-130);
    rotateY(90);
    torus(40, 10);
    pop();

    ////

    push();
    translate(150,-60);
    rotateX(90);
    torus(40, 10);
    pop();

    push();
    translate(150,-10);
    rotateX(90);
    torus(40, 10);
    pop();

    push();
    translate(150,40);
    rotateX(90);
    torus(40, 10);
    pop();

    push();
    translate(150,90);
    rotateX(90);
    torus(40, 10);
    pop();

    push();
    translate(150,140);
    rotateX(90);
    torus(40, 10);
    pop();


    push();
    translate(150,200);
    rotateX(90);
    torus(40, 10);
    pop();

}

/* quad(100,500,200,500,200,200,100,200);
  quad(600,550,500,550,500,150,600,150);
*/