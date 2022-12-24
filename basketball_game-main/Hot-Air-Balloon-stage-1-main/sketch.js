const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var basketball, basketballImg, ball;
var player, playerImg;
var hoop, hoopImg;
var courtImg;
var shoot;
var score;

function preload(){
basketball = loadImage("pictures/basketball.png");
playerImg = loadImage("pictures/player.png");
hoopImg = loadImage("pictures/hoop.png");
courtImg = loadImage("pictures/court1.jpeg")
}

function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

var balloptions = {
  isStatic: false,

}

/*basketball = createSprite(100,250,15,15);
basketball.addImage("basketball", basketballImg);
basketball.scale = 0.08;*/

ball = Bodies.circle(90,230,30,balloptions);
World.add(world, ball);

player = createSprite(130,310,20,50);
player.addImage("player",playerImg);

hoop = createSprite(300,100,30,30);
hoop.addImage("hoop", hoopImg);
hoop.scale = 0.7;

/*shoot = createImg("shoot.png");
shoot.position(30,30);
shoot.size(50,50);*/
}


function draw(){
background(courtImg);
drawSprites();
image(basketball,ball.position.x,ball.position.y,30,30);

fill("red");
text("Score: ", 10, 30);

if(keyIsDown(RIGHT_ARROW)){
  player.x = player.x + 5;
  ball.x = ball.x + 5;
}
ball.position.x = player.x-40;

if(keyIsDown(LEFT_ARROW)){
  player.x = player.x - 5;
  ball.x = ball.x - 5;
}

if(keyIsDown("space")){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0.1});
}
}




