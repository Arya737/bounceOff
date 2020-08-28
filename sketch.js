var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(50,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(150,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(250,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(350,100,50,50);
  gameObject4.shapeColor = "green";

  
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

