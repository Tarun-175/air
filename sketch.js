var balloon,background;
function preload(){
  
}




function setup() {
database = firebase.database();
console.log(datbase)
createCanvas(500,500)

balloon=createSprite(100,400,20,20)

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10;
}
else if(keyDown(UP_ARROW)){
  balloon.y=balloon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10;
}

  background(255,255,255);  
  drawSprites();
}