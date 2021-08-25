let box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
background('red');

if(keyDown("DOWN_ARROW")) {
  background('green');
  box.y = box.y + 2;
}

else if(keyDown("UP_ARROW")) {
  background('blue');
  box.y = box.y - 2;
}

else if(keyDown("LEFT_ARROW")) {
  background('yellow');
  box.x = box.x - 2;
}

else if(keyDown("RIGHT_ARROW")) {
  background('brown');
  box.x = box.x + 2;
}

drawSprites();
}




