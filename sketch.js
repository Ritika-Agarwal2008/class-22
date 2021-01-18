const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world

 var options={
   isStatic:true
 }
 ground=Bodies.rectangle(200,380,width,20,options)
 World.add(world,ground)
 console.log(ground.position.x)

 var ball_options={
 restitution:1
}
ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
}

function draw() {
  Engine.update(engine)
  background(0);  
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,width,20)
 circle(ball.position.x,ball.position.y,50)
}