const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight=300;

function setup() {
  createCanvas(700,800);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(900,550,2500,10);
  
  for (var k = 0; k <=width;k = k + 80){
    divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
  }
  




for(var j = 40; j<=width, j=j+50;)
{
  plinkos.push(new Plinko(j,75));
}


for(var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}




  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

}
  
  


function draw() {
  background("black");  
  ground.display();
  
for(var  j = 0; j < particles.lenght; k++){
  divisions[k].display();
}
}