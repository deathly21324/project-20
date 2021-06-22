
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rotator1,rotator2,rotator3,parc1,parc2,parc3,parc4,parc5

var block1,block2

var angle1=60;
var angle2=60;
var angle3=60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;

	//Create the Bodies Here.

	var plane_options={
		isStatic: true
	}

	var ball_options={
		restitution:0.4,
		friction:0.02
	}

	var rotator_options={
		isStatic: true
	}
   plane=Bodies.rectangle(400,650,800,5,plane_options)
   World.add(world,plane)

   block1=Bodies.rectangle(200,500,100,10,plane_options)
   World.add(world,block1)

   block2=Bodies.rectangle(600,500,100,10,plane_options)
   World.add(world,block2)

	rotator1=Bodies.rectangle(400,200,150,20,rotator_options)
	World.add(world,rotator1)
	rotator2=Bodies.rectangle(400,200,150,20,rotator_options)
	World.add(world,rotator2)
	rotator3=Bodies.rectangle(400,200,150,20,rotator_options)
	World.add(world,rotator3)
	
	parc1=Bodies.circle(400,10,10,ball_options)
	World.add(world,parc1)
	parc2=Bodies.circle(405,10,10,ball_options)
	World.add(world,parc2)
	parc3=Bodies.circle(395,10,10,ball_options)
	World.add(world,parc3)
	parc4=Bodies.circle(415,10,10,ball_options)
	World.add(world,parc4)
	parc5=Bodies.circle(410,10,10,ball_options)
	World.add(world,parc5)
	

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("lightgreen");
  
  rect(plane.position.x,plane.position.y,800,5)

  rect(block1.position.x,block1.position.y,100,10)
 rect(block2.position.x,block2.position.y,100,10)

  ellipse(parc1.position.x,parc1.position.y,10,10)
  ellipse(parc2.position.x,parc2.position.y,10,10)
  ellipse(parc3.position.x,parc3.position.y,10,10)
  ellipse(parc4.position.x,parc4.position.y,10,10)
   ellipse(parc5.position.x,parc5.position.y,10,10)
 Matter.Body.rotate(rotator1,angle1)
 push()
 translate(rotator1.position.x,rotator1.position.y)
 rotate(angle1)
 rect(0,0,150,20)
 pop()
 angle1 +=5

 Matter.Body.rotate(rotator2,angle2)
 push()
 translate(rotator2.position.x,rotator2.position.y)
 rotate(angle2)
 rect(0,0,150,20)
 pop()
 angle2 +=3

 Matter.Body.rotate(rotator3,angle3)
 push()
 translate(rotator3.position.x,rotator3.position.y)
 rotate(angle3)
 rect(0,0,150,20)
 pop()
 angle3 +=1

  drawSprites();
 
}



