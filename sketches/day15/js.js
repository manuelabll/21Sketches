function setup(){

    createCanvas(700, 700);
}

function draw(){

    background(0);
    rectMode(CENTER);
    ellipseMode(CENTER);
    scale(0.7);
    translate(150, 150);

    ///center
    fill(37, 0, 224);
    rect(350, 350, 100);

    fill(81, 46, 255);  
    ellipse(350,350,50);
    

    ///left - rect
    fill(37, 0, 224);
    rect(250, 250, 100);
    rect(150, 150, 100);
    rect(50, 50, 100);
    rect(50, 150, 100);
    rect(50, 250, 100);
    rect(50, 350, 100);
    rect(50, 450, 100);
    rect(50, 550, 100);
    rect(50, 650, 100);

    /// ellipse

    fill(81, 46, 255);
    ellipse(250, 250, 50);
    ellipse(150, 150, 50);
    ellipse(50, 50, 50);
    ellipse(50, 150, 50);
    ellipse(50, 250, 50);
    ellipse(50, 350, 50);
    ellipse(50, 450, 50);
    ellipse(50, 550, 50);
    ellipse(50, 650, 50);


    /// right - rect

    fill(37, 0, 224);
    rect(450, 250, 100);
    rect(550, 150, 100);
    rect(650, 50, 100);
    rect(650, 150, 100);
    rect(650, 250, 100);
    rect(650, 350, 100);
    rect(650, 450, 100);
    rect(650, 550, 100);
    rect(650, 650, 100);

    //// ellipse

    fill(81, 46, 255);
    ellipse(450, 250, 50);
    ellipse(550, 150, 50);
    ellipse(650, 50, 50);
    ellipse(650, 150, 50);
    ellipse(650, 250, 50);
    ellipse(650, 350, 50);
    ellipse(650, 450, 50);
    ellipse(650, 550, 50);
    ellipse(650, 650, 50);




}



