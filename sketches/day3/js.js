


function setup() {
    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
}


function draw() {
    background(0);

    fill(0);
    stroke(255);
    translate(230, 0, 0);
    scale(1.4);


    push();
    translate(-300, 0, 0);
    rotateY(frameCount * 1);
    box(10,300,10,);
    pop();

    push();
    translate(-280, 0, 0);
    rotateY(frameCount * 1);
    box(10,300,10,);
    pop();

    push();
    translate(-260, 0, 0);
    rotateY(frameCount * 1);
    box(10,300,10,);
    pop();

    push();
    translate(-90, 0, 0);
    rotateY(frameCount * 1);
    box(10,300,10,);
    pop();

    push();
    translate(-70, 0, 0);
    rotateY(frameCount * 1);
    box(10,300,10,);
    pop();

    push();
    translate(-50, 0, 0);
    rotateY(frameCount * 1);
    box(10,300,10,);
    pop();

    push();
    translate(-210, -110, 0);
    //rotateY(frameCount * 1);
    rotateZ(125);    
    box(10,125,10,);
    pop();

    push();
    translate(-225, -103, 0);
    //rotateY(frameCount * 1);
    rotateZ(125);    
    box(10,140,10,);
    pop();

    push();
    translate(-235, -90, 0);
    //rotateY(frameCount * 1);
    rotateZ(125);    
    box(10,170,10,);
    pop();

    push();
    translate(-130, -100, 0);
    //rotateY(frameCount * 1);
    rotateZ(-140);    
    box(10,125,10,);
    pop();


    push();
    translate(-115, -90, 0);
    //rotateY(frameCount * 0.01);
    rotateZ(-140);    
    box(10,150,10,);
    pop();

    push();
    translate(-100, -85, 0);
    //rotateY(frameCount * 1);
    rotateZ(-140);    
    box(10,165,10,);
    pop();
    


  }



/* 
function draw(){
    for (i = 0; i < 30; i++){
        var noiseVal = mouseY + random(-20,20);
        var noiseVal2 = mouseX;
        // line(i * 10, 0, i * 10, noiseVal);
        // line(i*30, 0, i * 30, noiseVal);
        // line(0, 0, 500, noiseVal2);
        // line(1000, 0, 500, noiseVal2);
        noFill();
    }
}
 */

 function mousePressed() {

    saveCanvas("day3", "png")
} 