
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    pBall= new paper(200,350,2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');
  pBall.display();
  drawSprites();
 
}



