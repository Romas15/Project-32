const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var bird, slingShot;
var score = 0;

function preload() {
  backgroundImg = loadImage("bg.png");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(490, 366, 200, 20);
  ground2 = new Ground(900, 200, 200, 20);

  //level 1
  block1 = new Box(430, 335, 30, 40);
  block2 = new Box(460, 335, 30, 40);
  block3 = new Box(490, 335, 30, 40);
  block4 = new Box(520, 335, 30, 40);
  block5 = new Box(550, 335, 30, 40);

  //level 2
  block6 = new Box(490, 255, 30, 40);
  block7 = new Box(490, 295, 30, 40);
  block8 = new Box(520, 295, 30, 40);
  block9 = new Box(460, 295, 30, 40);
  //level 3
  block10 = new Box(460, 255, 30, 40);

  //second ground
  //level 1
  block11 = new Box(840, 169, 30, 40);
  block12 = new Box(900, 169, 30, 40);
  block13 = new Box(930, 169, 30, 40);
  block16 = new Box(870, 169, 30, 40);

  block14 = new Box(960, 169, 30, 40);

  //level 2
  block15 = new Box(900, 129, 30, 40);
  block17 = new Box(930, 129, 30, 40);
  block18 = new Box(870, 129, 30, 40);

  //level 3
  block19 = new Box(900, 89, 30, 40);

  bird = new Bird(200, 50);

  //log6 = new Log(230,180,80, PI/2);
  slingshot = new SlingShot(bird.body, { x: 200, y: 200 });
}

function draw() {
  background(180);

  strokeWeight(4);
  textSize(20);
  fill("red");
  text("Press Space to play again!", 150, 30);
  text("Score: " + score, 520, 150);
  Engine.update(engine);

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();

  bird.display();
}

function mouseDragged() {
  Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(bird.body);
  }
}
