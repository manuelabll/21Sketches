function setup(){

    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}

function draw(){

    background(0);
    fill(0, 219, 212);
    //stroke(0);
    rotateY(frameCount * 1);

    /// right 
    push();
    translate(200,0);
    rotateZ(180);
    cone(50, 400, 5,100);
    pop();

    push();
    translate(105,-120);
    rotate(-130);
    cone(50, 250, 5,100);
    pop();

    // left 
    push();
    translate(-200,0);
    rotateZ(180);
    cone(50, 400, 5,100);
    pop();

    push();
    translate(-105,-120);
    rotate(130);
    cone(50, 250, 5,100);
    pop();

   


}