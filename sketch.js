
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,370,20,20)
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1
  score=0
  
  ground=createSprite(200,380,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  FoodGroup=createGroup()
  obstacleGroup=createGroup()
  

  
}


function draw() {
background("white")
  if(ground.x<0) {
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  food()
  stone()
  text("survival time"+score,300,50)
  score=score+1
  drawSprites()
}
function food(){
  if(frameCount%80==0){
    banana=createSprite(600,250,40,10)
    banana.y=random(120,200)
    banana.velocityX=-5
    banana.lifetime=300
    banana.addImage(bananaImage)
    banana.scale=0.05
    FoodGroup.add(banana)
  }
}
function stone(){
  if(frameCount%200==0){
    obstacle=createSprite(400,350,10,40)
    obstacle.velocityX=-6
    obstacle.lifetime=300
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.15
    obstacleGroup.add(obstacle)
  }
}





