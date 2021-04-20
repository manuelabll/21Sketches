
function setup(){
    createCanvas(700, 700,WEBGL);
    angleMode(DEGREES);
}

function draw(){
    background(0);
    rotateY(frameCount * 1);
    fill(random(0, 255));
    stroke(random(0, 255));

    // center
    push();
    translate(0, 0);
    sphere(50);
    pop();

    /// right
    push();
    translate(60, -70);
    sphere(30);
    pop();

    push();
    translate(140, -140);
    sphere(50);
    pop();

    ///  I
    push();
    translate(140, -40);
    sphere(50);
    pop();

    push();
    translate(140, 60);
    sphere(50);
    pop();

    push();
    translate(140, 160);
    sphere(50);
    pop();

    /// left

    push();
    translate(-60, -70);
    sphere(30);
    pop();

    push();
    translate(-140, -140);
    sphere(50);
    pop();

    //// I

    push();
    translate(-140, -40);
    sphere(50);
    pop();

    push();
    translate(-140, 60);
    sphere(50);
    pop();

    push();
    translate(-140, 160);
    sphere(50);
    pop();
    
    //// right line

    push();
    rotate(45);
    translate(-5, -80);
    box(10,200,10);
    pop();

    ///// left line

    push();
    rotate(-45);
    translate(5, -80);
    box(10,200,10);
    pop();
}