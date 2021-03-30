
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var boy ,rope  ;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,height,1200,20);
  boy=new Boy(600,500);
  rope=new Rope(boy.body,{
    x:500,
    y:100
})
 stone1 = new Stone();
}
function draw() {
  
  background(0);
  Engine.update(engine);
 boy.display();
 rope.display();
 stone1.display();
}
