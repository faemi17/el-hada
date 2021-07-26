var fary1,fary1Img,faryVoice;
var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	faryImg = loaAnimation("images/faryImage1.png","iamges/faryImage2.png")
        faryVoice =loadSound("sound/joyMiusic.mp3")
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	//crea el sprite del hada, y agrega la animación para el hada


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fary1 = createSprite(200,200,20,20);
        fary1.addAnimation(fary1Img);
	fary1.scale=0.1

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
    if(star.y > 470 && starBody.position.y > 470){
	    Matter.Body.setStatic(starBody,true);
    }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(fary1.Worldmouse.x){
	    fary1.velocityX= 2;
            fary1.velocityX= -2;
	}
}
