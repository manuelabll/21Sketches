function setup() {

    createCanvas(700, 700, WEBGL);


}

function draw() {
    background(0);

    //normalMaterial();
    noFill();
    stroke(0, 255, 0);
    translate(0, 0, 0);
    rotateY(frameCount * 0.01);
    box(70, 300, 70);

    translate(47, -65, 0);
    push()
    rotateZ(-40)
    box(165, 70, 70);
    pop()


    translate(200, 70, 0);
    box(70, 300, 70);

    translate(-67, -42, 0);
    push()
    rotateZ(40)
    box(225, 70, 70);
    pop()

    ///

    



    
    
}

/* function mousePressed() {

    saveCanvas("day2", "png")
}   */