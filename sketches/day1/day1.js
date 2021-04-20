function setup() {

    createCanvas(700, 700);
    background(0);
    scale(1.5);
    translate(-50, 40, 0);

    ///  glow

    push();
    fill(181, 58, 175);
    noStroke();
    rect(110,50,50,290);
    rect(410,140,50,200);
    rect(260,140,50,200);

    translate(10, 0);
    stroke(181, 58, 175)
    strokeCap(SQUARE);
    strokeWeight(50)
    noFill()
    arc(350, 150, 150, 200, 3.2, 0, PI);

    strokeCap(SQUARE);
    strokeWeight(50)
    noFill()
    arc(200, 150, 150, 200, 3.2, 0, PI);

    filter(BLUR, 10);
    pop();

    /////
    
    fill(255, 0, 229);
    noStroke();
    rect(100,50,50,290);
    rect(400,140,50,200);
    rect(250,140,50,200);


    stroke(255, 0, 229)
    strokeCap(SQUARE);
    strokeWeight(50)
    noFill()
    arc(350, 150, 150, 200, 3.2, 0, PI);

    strokeCap(SQUARE);
    strokeWeight(50)
    noFill()
    arc(200, 150, 150, 200, 3.2, 0, PI);

    
}

/* function mousePressed() {

    saveCanvas("day1", "png")
}   */


