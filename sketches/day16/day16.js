function setup() {

    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}

function draw() {

    background(0);
    rotateY(mouseX);
    rotateY(160);
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);
    specularMaterial(250);

    push();
    translate(0, -150);
    rotateX(90);
    torus(60, 7, 20, 10);
    rotateY(millis() / 100);
    sphere(30, 10, 10);
    pop();

    //// left I

    stroke(255);
    noFill();
    push();
    translate(-150, -120, 0);
    box(60, 60, 60);
    rotateY(millis() / 50);
    sphere(15, 7, 7);
    pop();

    push();
    translate(-150, -60, 0);
    box(60, 60, 60);
    pop();

    push();
    translate(-150, 0, 0);
    box(60, 60, 60);
    rotateY(millis() / 50);
    sphere(15, 7, 7);
    pop();

    push();
    translate(-150, 60, 0);
    box(60, 60, 60);
    pop();

    push();
    translate(-150, 120, 0);
    box(60, 60, 60);
    rotateY(millis() / 50);
    sphere(15, 7, 7);
    pop();


    //// right I

    push();
    translate(150, -120, 0);
    box(60, 60, 60);
    rotateY(millis() / 50);
    sphere(15, 7, 7);
    pop();

    push();
    translate(150, -60, 0);
    box(60, 60, 60);
    pop();

    push();
    translate(150, 0, 0);
    box(60, 60, 60);
    rotateY(millis() / 50);
    sphere(15, 7, 7);
    pop();

    push();
    translate(150, 60, 0);
    box(60, 60, 60);
    pop();

    push();
    translate(150, 120, 0);
    box(60, 60, 60);
    rotateY(millis() / 50);
    sphere(15, 7, 7);
    pop();

    //// (/)
    push();
    translate(100, -130, 0);
    rotate(45)
    box(0, 285, 60);
    pop();

    ///// (\)
    push();
    translate(-100, -130, 0);
    rotate(-45)
    box(0, 285, 60);
    pop();




}