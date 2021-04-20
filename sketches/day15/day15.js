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
    fill(255, 255, 0)
    rect(350, 350, 100);

    fill(255, 255, 143);
    ellipse(350,350,50);
    

    ///left 

    /// 1 prpl
    fill(37, 0, 224)
    rect(50, 250, 100);
    rect(50, 650, 100);

    fill(81, 46, 255);
    ellipse(50, 250, 50);
    ellipse(50, 650, 50);
    
    /// 2 pink
    fill(255, 0, 221)
    rect(150, 150, 100);
    rect(50, 350, 100);

    fill(255, 148, 241);
    ellipse(150, 150, 50);
    ellipse(50, 350, 50);

    /// 3 cyan
    fill(0, 251, 255)
    rect(50, 50, 100);
    rect(50, 450, 100);

    fill(148, 253, 255);
    ellipse(50, 50, 50);
    ellipse(50, 450, 50);

    /// 4 yelloe
    fill(255, 255, 0)
    rect(50, 150, 100);
    rect(50, 550, 100);

    fill(255, 255, 143);
    ellipse(50, 150, 50);
    ellipse(50, 550, 50);


    /// right 

    /// 1 cyan
    fill(0, 251, 255)
    rect(450, 250, 100);
    rect(650, 250, 100);
    rect(650, 650, 100);

    fill(148, 253, 255);
    ellipse(450, 250, 50);
    ellipse(650, 250, 50);
    ellipse(650, 650, 50);

    /// 2 yellow
    fill(255, 255, 0)
    rect(550, 150, 100);
    rect(650, 350, 100);

    fill(255, 255, 143);
    ellipse(550, 150, 50);
    ellipse(650, 350, 50);

    /// 3 prpl
    fill(37, 0, 224)
    rect(650, 50, 100);
    rect(650, 450, 100);

    fill(81, 46, 255);
    ellipse(650, 50, 50);
    ellipse(650, 450, 50);

    /// 4 pink
    fill(255, 0, 221)
    rect(650, 150, 100);
    rect(650, 550, 100);

    fill(255, 148, 241);
    ellipse(650, 150, 50);
    ellipse(650, 550, 50);


     /// mouse 

     fill(0, 255, 55);
     rect(mouseX, mouseY, 100);
     fill(143, 255, 167)
     ellipse(mouseX, mouseY, 50);
 

}

