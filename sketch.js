
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var myengine,myworld;
var bob1,bob2,bob3,bob4,bob5;
var roof;

var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(600, 600);

	myengine = Engine.create();
  myworld = myengine.world;
  
  //render function
  var render = Matter.Render.create({
	  element: document.body,
	  engine: myengine,
	  options: {
	    width: 600,
	    height: 600,
	    wireframes: false
	  }
	});

	//Create the Bodies Here.
   
  roof=new Roof(300,100,300,30)

	bob1=new Bob(200,500,25,"purple");
	bob2=new Bob(250,500,25,"pink");
  bob3=new Bob(300,500,25,"blue");
  bob4=new Bob(350,500,25,"white");
	bob5=new Bob(400,500,25,"green");
	
	rope1=new Rope(bob1.body,{x:200,y:100});
	rope2=new Rope(bob2.body,{x:250,y:100});
	rope3=new Rope(bob3.body,{x:300,y:100});
	rope4=new Rope(bob4.body,{x:350,y:100});
	rope5=new Rope(bob5.body,{x:400,y:100});
  
 

  Engine.run(myengine);
 // Matter.Render.run(render);
  
}


function draw() {
  
  background(0);
  
  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
}

function mouseDragged() {
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}

