
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(180,500,80);
	bobObject2 = new Bob(259,500,80);
	bobObject3 = new Bob(338,500,80);
	bobObject4 = new Bob(417,500,80);
	bobObject5 = new Bob(498,500,80);
 
	roof = new Roof(400, 200, 600, 20);

    rope1 = new Rope(bobObject1.body, roof.body,{x:180, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



