var mr, fr;
function setup() {
  createCanvas(800,400);
  fr =  createSprite(200, 200, 50, 50);
  mr = createSprite(400,200,50,80);
}

function draw() {
  background(0);  
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if(mr.x - fr.x === mr.width /2 + fr.width/2){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  else {
    mr.shapeColor ="green";
    fr.shapeColor = "green";
  }
  drawSprites();
}