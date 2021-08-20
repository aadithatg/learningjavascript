var aadith;
function setup() {
  createCanvas(400,400);
  aadith = createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)) {
    aadith.position.x = aadith.position.x +5
    
  }
  if(keyIsDown(LEFT_ARROW)) {
    aadith.position.x = aadith.position.x -5
  }
drawSprites();
}




