function setup() {

    createCanvas(700, 700, WEBGL);


}


function draw() {
    background(0);
    angleMode(DEGREES);
    scale(0.8);
    //normalMaterial();
    fill(0);
    stroke(255, 46, 231);
    
    translate(0, 0, 0);
    rotateY(frameCount * 1);
    cylinder(60, 300);

    translate(60, -40, 0);
    push()
    rotateX(0)
    rotateZ(-40)
    cylinder(40, 240);
    pop()


    translate(200, 40, 0);
    cylinder(60, 300);

    translate(-65, -40, 0);
    push()
    rotateX(0)
    rotateZ(55)
    cylinder(40, 200);
    pop()

    push();
    translate(65, -90, 0);
    sphere(60,);
    pop();

    push();
    translate(-195, -90, 0);
    sphere(60,);
    pop();

 

}

