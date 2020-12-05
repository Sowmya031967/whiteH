const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ground,paper1;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(680,300,20,100);
    box2 = new Box(500,100,20,100);
    box3 = new Box (590,600,260,20)
    ground = new Ground(400,height,1000,20)
    paper1 = new paper(height/4,650,50,{restitution:0.4, isStatic:false,density:1.2} )
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    paper1.display();

    
}
function keyPressed(){
if(keyCode === UP_ARROW ){
    paper1 = new paper(height/4,600,50,{restitution:0.4, isStatic:false,density:1.2} )

   
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

}
}