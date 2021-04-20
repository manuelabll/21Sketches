

function setup() {

    createCanvas(700, 700);
    s = new Scribble();
    angleMode(DEGREES);

}

function draw() {

    var gap =  random(5, 10);
    var angle = random(0, 360);

    frameRate(1);
    background(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(random(1, 5));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    var xCoords1 = [ 100, 200, 200, 100 ];
    var yCoords1 = [ 550, 550, 150, 150 ];
    s.scribbleFilling(xCoords1, yCoords1, gap, angle);
    s.scribbleRect(150, height / 2, 100, 400);

    var xCoords2 = [ 600, 500, 500, 600 ];
    var yCoords2 = [ 550, 550, 150, 150 ];
    s.scribbleFilling(xCoords2, yCoords2, gap, angle);
    s.scribbleRect(550, height / 2, 100, 400);
    
    push();
    var xCoords2 = [ 600, 370, 320, 550 ];
    var yCoords2 = [ 230, 390, 300, 150 ];
    s.scribbleFilling(xCoords2, yCoords2, gap, angle);
    translate(460, 265);
    rotate(-125);
    s.scribbleRoundedRect(0, 0, 100, 350, 50);
    pop();
  
    var xCoords3 = [ 330, 390, 150, 100 ];
    var yCoords3 = [ 390, 300, 150, 230 ];
    s.scribbleFilling(xCoords3, yCoords3, gap, angle);
    translate(240, 265);
    rotate(125);
    s.scribbleRoundedRect(0, 0, 100, 350, 50);
}

/*  function mousePressed() {

    saveCanvas("sketch-01", "png")
} */