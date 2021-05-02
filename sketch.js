const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var rope,ground;

function preload() {
  
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  ball = new Ball(1300,200,100)
 
  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);

  box9 = new Box(700, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);

  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(800, 100, 70, 70);

  box17 = new Box(600, 100, 70, 70);
  box18 = new Box(900, 100, 70, 70);
  box19 = new Box(900, 100, 70, 70);
  box20 = new Box(900, 100, 70, 70);

  box21 = new Box(600, 100, 70, 70);
  box22 = new Box(600, 100, 70, 70);
  box23 = new Box(600, 100, 70, 70);
  box24 = new Box(900, 100, 70, 70);

  box25 = new Box(700, 100, 70, 70);
  box26 = new Box(800, 100, 70, 70);
  box27 = new Box(800, 100, 70, 70);
  box28 = new Box(800, 100, 70, 70);

  box29 = new Box(700, 100, 70, 70);
  box30 = new Box(700, 100, 70, 70);
  box31 = new Box(700, 100, 70, 70);
  box32 = new Box(800, 100, 70, 70);

  box33 = new Box(400, 100, 70, 70);
  box34 = new Box(500, 100, 70, 70);
  box35 = new Box(500, 100, 70, 70);
  box36 = new Box(500, 100, 70, 70);

  box37 = new Box(400, 100, 70, 70);
  box38 = new Box(400, 100, 70, 70);
  box39 = new Box(400, 100, 70, 70);
  box40 = new Box(500, 100, 70, 70);

  box41 = new Box(200, 100, 70, 70);
  box42 = new Box(300, 100, 70, 70);
  box43 = new Box(300, 100, 70, 70);
  box44 = new Box(300, 100, 70, 70);

  box45 = new Box(200, 100, 70, 70);
  box46 = new Box(200, 100, 70, 70);
  box47 = new Box(200, 100, 70, 70);
  box48 = new Box(300, 100, 70, 70);

  box49 = new Box(400, 100, 70, 70);
  box50 = new Box(500, 100, 70, 70);
  box51 = new Box(500, 100, 70, 70);
  box52 = new Box(500, 100, 70, 70);

  box53 = new Box(400, 100, 70, 70);
  box54 = new Box(400, 100, 70, 70);
  box55 = new Box(400, 100, 70, 70);
  box56 = new Box(500, 100, 70, 70);

  box57 = new Box(200, 100, 70, 70);
  box58 = new Box(300, 100, 70, 70);
  box59 = new Box(300, 100, 70, 70);
  box60 = new Box(300, 100, 70, 70);

  box61 = new Box(200, 100, 70, 70);
  box62 = new Box(200, 100, 70, 70);
  box63 = new Box(200, 100, 70, 70);
  box64 = new Box(300, 100, 70, 70);

  rope = new Rope(ball.body,{x:1300,y:20})
  
}

function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display()

  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display()

  box21.display();
  box22.display();
  box23.display();
  box24.display();

  box25.display();
  box26.display();
  box27.display();
  box28.display()

  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display()

  box37.display();
  box38.display();
  box39.display();
  box40.display();

  box41.display();
  box42.display();
  box43.display();
  box44.display()

  box45.display();
  box46.display();
  box47.display();
  box48.display();

  box49.display();
  box50.display();
  box51.display();
  box52.display()

  box53.display();
  box54.display();
  box55.display();
  box56.display();

  box57.display();
  box58.display();
  box59.display();
  box60.display()

  box61.display();
  box62.display();
  box63.display();
  box64.display();

  ball.display();

  rope.display();

  
 
  
  

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});

}

//function keyPressed(){
  //if(keyCode === 32){
    //Matter.Body.setPosition(hero.body,{x:300,y:50});
    //rope.attach(hero.body);

  //}
//}
