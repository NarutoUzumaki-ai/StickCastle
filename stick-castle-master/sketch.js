const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stick1;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;



  stick1 = new Stick (200,320,140,100);
  stick2 = new Stick (100,290,60,160);
  stick3 = new Stick (300,290,60,160);   
  stick4 = new Stick (200,185,60,170);
  stick5 = new Stick (38.5,225,60, 290);  
  stick6 = new Stick (361,225,60,290);


      
}

function draw(){
    background("Cyan");

    Engine.update(engine);

   
    triangle(200,30,169,100,231,100);
    fill("Green");

    triangle(100,150,70,210,130,210);
    fill("Green");

    triangle(300,150,269,210,331,210);
    fill("Orange");

    triangle(40,10,10,80,70,80);
    fill("Orange");

    triangle(360,10,330,80,390,80);
    fill("Red");


   
       stick1.display();
       stick2.display();
       stick3.display();
       stick4.display();
       stick5.display();
       stick6.display();
    
      
}