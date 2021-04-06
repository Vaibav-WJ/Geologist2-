
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  

	ground = new Ground(600,height,1200,20)
  hammer = new Hammer(200,200,40,40)
	stone = new Stone(200,500,40,40)
  iron = new Iron(500,100,50,50)
  rubber = new Rubber(400,300,20)
  sand1 = new Sand(200,100,10)
  sand2 = new Sand(200,120,10)
  sand3 = new Sand(200,130,10)
  sand4 = new Sand(200,140,10)

	Engine.run(engine);
  
}


function draw() {
  
  background("cyan");
  Engine.update(engine);
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();
  drawSprites();
 
  
}



