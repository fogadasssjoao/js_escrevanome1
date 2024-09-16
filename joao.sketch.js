function setup() {
  createCanvas(1000, 1000);
  background("black")
}

function draw() {
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 50, 65);
  }
