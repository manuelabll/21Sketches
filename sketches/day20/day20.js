function setup(){

    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}

function draw(){

    background(0);
    stroke(random(0, 255));
    strokeWeight(5);
    noFill();
    rotateY(frameCount * 1);

    // left

    push();
    translate(0, -25);
    rotateY(45)
    box(70, 70, 70);
    pop();

    push();
    translate(-100, -95);
    rotateY(45)
    box(70, 70, 70);
    pop();

    push();
    translate(-100, -165);
    rotateY(45)
    box(70, 70, 70);
    pop();

    push();
    translate(-200, 0);
    rotateY(45)
    box(70, 400, 70);
    pop();

    // right

    push();
    translate(100, -95);
    rotateY(45)
    box(70, 70, 70);
    pop();

    push();
    translate(100, -165);
    rotateY(45)
    box(70, 70, 70);
    pop();

    push();
    translate(200, 0);
    rotateY(45)
    box(70, 400, 70);
    pop();

}