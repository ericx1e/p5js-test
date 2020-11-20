function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  // noStroke();
  
  directionalLight(250, 0, 0, -1 -1 -1);
  lights();
  push();
  translate(-75, 0);
  rotateX(mouseX/100);
  rotateY(-mouseY/100);
  box(50);
  pop();
  push();
  translate(75, 0);
  rotateX(mouseX/100);
  rotateY(-mouseY/100);
  sphere(50);
  pop();
}