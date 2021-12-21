var iron, iron_run, iron_dead;
var bg, backgroundImg;
var brickImg,brickGroup;
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 iron_run = loadImage("images/iron.png");
 brickImg = loadImage("images/stone.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  iron = createSprite(200,500,50,50);
 iron.addImage(iron_run)
  iron.scale = 0.3;

  brickGroup = new Group()
 
}

function draw() {
bg.velocityX=-5;
  if (bg.x < 100){
  bg.x=bg.width/5;
  }
  if(iron.x<200){
    iron.x=200;
  }

  if(iron.y<50){
    iron.y=50;
  }

  if(keyDown("up") ) {
    iron.y =iron.y-  6;
  }

  if(keyDown("left") ) {
    iron.x = iron.x -6;
  }
  if(keyDown("right") ) {
    iron.x = iron.x+ 6;
  }
iron.velocityY = iron.velocityY + 0.5;
  generateBricks();
  for(var i = 0 ; i< (brickGroup).length ;i++){
    var temp = (brickGroup).get(i) ;
    
    if (temp.isTouching(iron)) {
      iron.collide(temp);
     
        
    }



  drawSprites();
}


function generateBricks() {
  if (frameCount % 70 === 0) {
    var brick = createSprite(1200,120,40,10);
    brick.y = random(50,450);
    brick.addImage(brickImg);
    brick.scale = 0.5;
    brick.velocityX = -5;
    
    brick.lifetime =250;
    brickGroup.add(brick);
  }
}
}
