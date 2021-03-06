var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5 , isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	
}


function draw() {
  background(bgImg);
  star.x = starBody.position.x
  star.y = starBody.position.y

  if(keyDown('right')){
	fairy.x = fairy.x + 5;
  }
  if(keyDown('left')){
	fairy.x = fairy.x - 5;
  }
  if(keyDown('down')){
	Matter.Body.setStatic(starBody,false);
  }
  if(star.y > 470 && starBody.position.y > 470 && fairy.x > 513 && fairy.x < 517){
	Matter.Body.setStatic(starBody,true);
  }
  drawSprites();
 console.log(fairy.x);
}

/*function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	}
}
*/
