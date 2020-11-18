const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rightBox, leftBox, bottomBox, ground;
var trash;
function preload() {}

function setup() {
  createCanvas(1200, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  rightBox = new Box(1015, 600, 20, 100);
  bottomBox = new Box(1100, 640, 150, 20);
  leftBox = new Box(1170, 600, 20, 100);
  ground = new Box(800, 670, width, 1);
  trash = new Trash(300, 640, 30);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  rightBox.display();
  bottomBox.display();
  leftBox.display();
  trash.display();
  if (keyDown(38)) {
    applyForce();
  }
}
function applyForce() {
  Matter.Body.applyForce(trash.body, trash.body.position, { x: 85, y: -80 });
}
