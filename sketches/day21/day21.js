function setup() {

    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}

function draw() {

    background(0);
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;

    ambientLight(0);
    directionalLight(255, 64, 124, locX, locY, 0);
    pointLight(123, 66, 255, locX, locY, 250);
    specularMaterial(0);
    noStroke(0);
    fill(255);
    scale(0.5);
    //rotateY(frameCount * 1);

    ///// (left I)

    push();
    translate(-165, 0, 0);
    box(70, 300, 100);
    pop();


    //// (center /)

    push();
    translate(85, 0, 0);
    rotate(35)
    box(70, 300, 70);
    pop();

    //// (center \)

    push();
    translate(-85, 0, 0);
    rotate(-35)
    box(70, 300, 70);
    pop();


    ///// (right I)

    push();
    translate(165, 0, 0);
    box(70, 300, 100);
    pop();



    ///// (bottom)

    push();
    translate(0, 130, 0);
    box(110, 40, 70);

    pop();

    // circles
    fill(0, 44, 219)
    rotateY(frameCount * 1);
    torus(400, 20, 200, 200);

    fill(219, 55, 0)
    rotateX(frameCount * 1);
    torus(500, 20,200,200);
}