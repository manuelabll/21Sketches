function setup() {

    createCanvas(700, 700);
    s = new Scribble();
    angleMode(DEGREES);

}

function draw(){

    background(0);
    scale(1.7);

    frameRate(15);
    strokeWeight(50);
    //stroke(random(0, 255),random(0, 255),random(0, 255));
    stroke(64, 226, 255);
    s.scribbleLine(103, 100, 103, 300,);
    s.scribbleLine(303, 300, 303, 200,);
    s.scribbleLine(98, 98, 198, 198,);
    s.scribbleLine(203, 203, 303, 103,);

    strokeWeight(50);
    //stroke(random(0, 255),random(0, 255),random(0, 255));
    stroke(54, 43, 255);
    s.scribbleLine(98, 100, 98, 300,);
    s.scribbleLine(298, 300, 298, 200,);
    s.scribbleLine(103, 103, 203, 203,);
    s.scribbleLine(198, 198, 298, 98,); 


    strokeWeight(50);
    stroke(0);
    s.scribbleLine(100, 100, 200, 200,);
    s.scribbleLine(100, 100, 100, 300,);
    s.scribbleLine(200, 200, 300, 100,); 
    s.scribbleLine(300, 300, 300, 200,);


    
}

/* function mousePressed() {

    saveCanvas("day6", "png")
}  */