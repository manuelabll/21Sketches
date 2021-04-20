function setup(){

    createCanvas(700, 700);
}

function draw(){

    background(0);
    textSize(400);
    textAlign(CENTER);
    scale(1.4);
    translate(-130, -50, 0)
    frameRate(4)

    //fill(235);
    //fill(random(213,255));
    fill(random(0,45));
    text("M",375,450);

    //fill(20);
    //fill(random(171,213));
    fill(random(45,87));
    text("M",370,450);

    //fill(245);
    //fill(random(129,171));
    fill(random(87,129));
    text("M",365,450);

    //fill(10);
    //fill(random(87,129));
    fill(random(129,171));
    text("M",360,450);

    //fill(255);
    //fill(random(45,87));
    fill(random(171,213));
    text("M",355,450);

    //fill(0);
    //fill(random(0,45));
    fill(random(213,255));
    text("M",350,450);
    


}

/* function mousePressed() {

    saveCanvas("day7", "png")
}   */