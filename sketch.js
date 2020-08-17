const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var divisionsHeight = 300
var divisions = [];
var plinkos = [];
var particals = [];
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,750,1200,20);
  ground.shapeColor = "white"

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionsHeight/2, 10, divisionsHeight));
  }

  for (var j= 40; j <= width; j=j+50){
    //console.log()
    plinkos.push(new Plinko(j,75,10))
  }
  for (var j= 15; j <= width; j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  if(frameCount%60 === 0){
    particals.push(new Partical(random(width/2-10,width/2+10),10,10));
  }

}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  for(k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(j = 0; j < plinkos.length; j++){
    plinkos[j].display();
    //console.log(plinkos.length);
  }
  for(var j = 0; j < particals.length; j++){
    particlas[j].display;
  }
  drawSprites();
  
}