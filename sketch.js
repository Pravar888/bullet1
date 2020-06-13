var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed  = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(200,200,10,10);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
  if (hasCollided(bullet,wall))
  {
   
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
    bullet.velocityX = 0;
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function hasCollided(ob1,ob2)
{
 if(wall.x - bullet.x < bullet.width/2 + wall.width/2  ) 
{
  return true
}
else 
{  
  return false
}
}
  
   
