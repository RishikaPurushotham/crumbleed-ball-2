const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 box=new Box()
	 paper=new Paper()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 
  box.display();
  paper.display();
  drawSprites();
  
}

function keyPressed (){

if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-250})
}

}


