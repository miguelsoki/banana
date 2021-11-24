var banana;
function setup() {
  createCanvas(400,400);
  banana=createSprite(100,190,20,20);
  banana.shapeColor='yellow';

}

function draw() 
{
  
  background('white');
if(keyDown(UP_ARROW)){

banana.y=banana.y-5
}
if(keyDown(DOWN_ARROW)){


  banana.y=banana.y+5
}

if(keyDown(LEFT_ARROW)){

  banana.x=banana.x-5
}

if(keyDown(RIGHT_ARROW)){

banana.x=banana.x+5
}


  drawSprites();
}




