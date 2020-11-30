const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var dog1,happyDog
var database,foodS,foodStock


function preload()
{

 
}

function setup() {
  createCanvas(800, 800);
  
  


  dog1 =  new Doggo(400,400,30,30);
  dog2 = new Doggo(400,400,30,30);
  
}


function draw() {  
  background("green");
  drawSprites();
  dog1.display();

  fill(255);
  stroke(0);
  textSize(25)
  textFont('Tahoma');
  text("Note: Press UP_ARROW Key To Feed Drago Milk",200,100);

  if (keyWentDown(UP_ARROW)){
    
    dog2.display();
    dog1.velocityX = 100
   
}

  

}



