var helicopterIMG, helicopterSprite, packageSprite,packageIMG,boxSide1,boxSide2;
var packageBody,ground,box_Bottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	boxBottom=createSprite(width/2,650,200,20);
	boxBottom.shapeColor=color(255,0,0);

	boxSide1=createSprite(310,610,20,100);
	boxSide1.shapeColor=color(255,0,0);

	boxSide2=createSprite(490,610,20,100);
	boxSide2.shapeColor=color(255,0,0);
	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.25, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box_Bottom = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, box_Bottom);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		   Matter.Body.setStatic(packageBody,false);
		   
  }
}



