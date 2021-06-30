var garden,rabbit;
var gardenImg,rabbitImg,leafImage,appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImage = loadImage("leaf.png");
  appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  spawnLeaf();
  spawnApple();
  drawSprites();
}

function spawnApple(){
  if (World.frameCount % 120 == 0) {
    var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
    jwellery.addImage(appleImage);
    jwellery.scale=0.13;
    jwellery.velocityY = 5;
    jwellery.lifetime = 150;
    }
   
 }

 function spawnLeaf(){
  if (World.frameCount % 120 == 0) {
    var leaf = createSprite(Math.round(random(50, 350),40, 10, 10));
    leaf.addImage(leafImage);
     leaf.scale=0.04;
     leaf.velocityY = 3;
     leaf.lifetime = 150;
    }
 }
 