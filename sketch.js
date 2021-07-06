var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var leaves,leavesImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leavesImage = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

//creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.1;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

    if(frameCount % 80 === 0){
      createApples();
      createLeaves();
    }

  drawSprites();
}

function createApples(){
    apple = createSprite(150,30,20,10);
    apple.addImage(appleImage);
    apple.scale = 0.095;
    apple.velocityY = 5;
    apple.x = Math.round(random(0,400));
    apple.lifetime = 100;
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
}

function createLeaves(){
    leaves = createSprite(150,30,20,10);
    leaves.addImage(leavesImage);
    leaves.scale = 0.095;
    leaves.velocityY = 5;
    leaves.x = Math.round(random(0,400));
    leaves.lifetime = 100;
    leaves.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
}