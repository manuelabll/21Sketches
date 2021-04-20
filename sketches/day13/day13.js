function setup(){

    createCanvas(700, 700);
    angleMode(DEGREES);
}

var s;

function draw(){

    background(0);
    stroke(123, 66, 255);
    noFill();
    strokeWeight(5);

    push();
    translate(50, 230);
    scale(2.5);
    triangle(30, 75, 58, 20, 86, 75);
    pop();

    push();
    translate(330, 230);
    scale(2.5);
    triangle(30, 75, 58, 20, 86, 75);
    pop();

    push();
    translate(480, 360);
    scale(2.5);
    rotate(180);
    triangle(30, 75, 58, 20, 86, 75);
    pop();

    push();
    strokeWeight(8);
    strokeCap(SQUARE);
    line(170, 130, 40, 450);
    line(500, 130, 630, 450);

    stroke(0);
    strokeWeight(18);
    line(80, 418, 580, 418);
    line(200, 170, 480, 170);
    pop();
}

