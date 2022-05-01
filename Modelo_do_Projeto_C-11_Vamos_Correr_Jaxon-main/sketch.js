var playerImg, roadImg;
var player, road, leftBorder, rightBorder;
var left_vel=0;
var right_vel=0;
var max_vel=15;
var acceleration=2;
var deceleration=3;

function preload(){
  //imagens pré-carregadas
  playerImg = loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-2.png");
  roadImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  road = createSprite(200,200);
  player = createSprite(200,300);
  road.addImage(roadImg);
  player.addAnimation("walking",playerImg);
  player.scale = 0.0625;
  leftBorder = createSprite(0,200,20,400)
  rightBorder = createSprite(400,200,20,400)
  leftBorder.visible = false;
  rightBorder.visible = false;
}

function draw() {
  background(0);
  road.velocityY = 5;
  if(road.y>400){
    road.y=200
  }

  if (keyDown("a")& left_vel<=max_vel){
    left_vel = left_vel+acceleration;
  } else if(left_vel>0){
    left_vel = left_vel-deceleration;
  }
  if (keyDown("d")& right_vel<=max_vel){
    right_vel = right_vel+acceleration;
  } else if(right_vel>0){
    right_vel = right_vel-deceleration;
  }

  if(right_vel<0){
    right_vel=0;
  }
  if(left_vel<0){
    left_vel=0;
  }

  player.velocityX = right_vel - left_vel;
  
  player.collide(leftBorder);
  player.collide(rightBorder);
  
  drawSprites();
}
