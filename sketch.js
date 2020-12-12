
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1 , bobObject2 , bobObject3 , bobObject4 , bobObject5;
var roof;
var rope1 , rope2 , rope3 , rope4 , rope5;

function setup() {
	createCanvas(1190, 700);



	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(670 , 580 ,70 );
	bobObject2= new Bob(570 , 580 , 70);
	bobObject3 = new Bob(470 , 580 , 70);
	bobObject4 = new Bob(370 , 580 , 70);
	bobObject5 = new Bob(270 , 580 , 70);

	roof = new Roof(800/2 , 100 , 600 , 100);

	 rope1 = new Rope(bobObject1.body , 580 ,   90);
	 rope2 = new Rope(bobObject2.body , 510 , 90);
	 rope3 = new Rope(bobObject3.body , 440 , 90);
	 rope4 = new Rope(bobObject4.body , 370 , 90);
	 rope5 = new Rope(bobObject5.body , 300 , 90);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  roof.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.setPosition(bobObject1.body , {x: 1060 , y: 430});
	}
 
}



