function setup() {
  createCanvas(800, 800);
  strokeWeight(60);
  p = {
    sX: 0,
    sY: 0,
    vX: 0,
    vY: 0,
    aX: 0,
    aY: 0,
    mC: 100
  };
}

function draw() {
  background(20);
  stroke(255)
  p.aX = (mouseX - p.sX)/p.mC;
  p.aY = (mouseY - p.sY)/p.mC;
  p.vX += p.aX;
  p.vY += p.aY;
  p.sX += p.vX;
  p.sY += p.vY;
  p.mC = 150;
  point(p.sX, p.sY);
}