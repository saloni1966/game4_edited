var p1, p2;

var uzi, bullets, bat;
var uzii, bati;

var blaster, ray, acid;
var blasteri, acidi;

var plate1, plate2, plate3, plate4, plate5 ;
var p1s =500;
var p1h =500;
var p2s =500;
var p2h =500;


var hp1, hp2;
var sd1, sd2;
var counter = 0;

function preload(){

  uzii = loadImage("Sprites/UZI.png");
  bati = loadImage("Sprites/Metal Bat.png");
  blasteri = loadImage("Sprites/Blaster.png");
  acidi = loadImage("Sprites/acid.png");
}

function setup() {
  createCanvas(1600,950);

  
  p1 = createSprite(400, 142.5, 30, 75);
  p1.shapeColor = "blue"

  p2 = createSprite(1200, 742, 30, 75);
  p2.shapeColor = "yellow"
  p2.debug = true
   
  plate1 = createSprite(400, 800, 500, 40);
  plate2 = createSprite(1200, 800, 500, 40);
  plate3 = createSprite(400, 200, 500, 40);
  plate4 = createSprite(1200, 200, 500, 40);
  plate5 = createSprite(800, 500, 500, 40);
  
  plate1.shapeColor = "Brown"
  plate2.shapeColor = "Brown"
  plate3.shapeColor = "Brown"
  plate4.shapeColor = "Brown"
  plate5.shapeColor = "Brown"


  

  hp1 = createSprite(10, 475, 10, p1s)
  hp1.shapeColor = "red"

  sd1 = createSprite(30, 475, 10, p1h)
  sd1.shapeColor = rgb(255, 229, 180);
  

  sd2 = createSprite(1570, 475, 10, p2s)
  sd2.shapeColor = rgb(255, 229, 180);

  hp2 = createSprite(1590, 475, 10, p2h)
  hp2.shapeColor = "red"

  
  bat = createSprite(p1.x, p1.y, 15, 75);
  bat.addImage(bati)
  bat.scale = 0.1
  bat.debug = true;

  uzi = createSprite(p1.x, p1.y, 10, 20);
  uzi.addImage(uzii)
  uzi.scale = 0.05

  blaster = createSprite(p2.x, p2.y, 10, 20);
  blaster.addImage(blasteri)
  blaster.scale = 0.08

  acid = createSprite(p2.x, p2.y, 10, 20);
  acid.addImage(acidi)
  acid.scale = 0.05

  bat.visible = false;
  acid.visible = false;
}

function draw() {
  background("skyblue");  
  drawSprites();

  

  uzi.x = p1.x
  uzi.y = p1.y

  bat.x = p1.x - 10
  bat.y = p1.y - 20

  blaster.x = p2.x
  blaster.y = p2.y

  acid.x = p2.x
  acid.y = p2.y

  p1Movement();
  p2Movement();

  //sprite collide

  p1.collide(plate1);
  p1.collide(plate2);
  p1.collide(plate3);
  p1.collide(plate4);
  p1.collide(plate5);

  p2.collide(plate1);
  p2.collide(plate2);
  p2.collide(plate3);
  p2.collide(plate4);
  p2.collide(plate5);


  if(keyWentDown("q")){

    uzi.visible = true;
    bat.visible = false;

  }

  if(keyWentDown("e")){

    uzi.visible = false;
    bat.visible = true;

  }

  if(keyWentDown("o")){

    blaster.visible = true;
    acid.visible = false;

  }

  if(keyWentDown("p")){

    blaster.visible = false;
    acid.visible = true;

  }

  
  if(p1.x > p2.x){

    uzi.mirrorX(-1);
    bat.mirrorX(-1);
    bat.x = p1.x + 10

    blaster.mirrorX(1);
    acid.mirrorX(1);
  }


  if(p1.x < p2.x){
    uzi.mirrorX(1);
    bat.mirrorX(1);
    

    blaster.mirrorX(-1);
    acid.mirrorX(-1);
  }

  p2healthLoss();
  
  
}

function p1Movement(){

  //jump mechanic
 

  if(keyWentDown("w")){
    p1.velocityY = -26
  }
  
  if(keyWentUp("w")){
    p1.velocityY =  10;
  }

  if(p1.velocityY === 0){
    p1.velocityY = 0
  }
 
  if(keyDown("s")){
    
    p1.rotation = 90
    p1.velocityY =  10;
  }
  else{

  p1.rotation = 0
  }
  if(keyDown("a")){
    p1.x = p1.x - 25
    p1.velocityY =  10;
  }
  if(keyDown("d")){
    p1.x = p1.x + 25
    p1.velocityY =  10;
  }

}

function p2Movement(){

  if(keyWentDown("up")){
    p2.velocityY = -26
  }
  
  if(keyWentUp("up")){
    p2.velocityY =  10;
  }

  
  if(keyDown("down")){
    
    p2.rotation = 90
    p2.velocityY =  10;
  }
  else{

  p2.rotation = 0
  }
  if(keyDown("left")){
    p2.x = p2.x - 25
    p2.velocityY =  10;
  }

  if(keyDown("right")){
    p2.x = p2.x + 25
    p2.velocityY =  10;
  }
}


function p1healthLoss(){

 /* if(ray.isTouching(p1)){

    if(p1s >= 0){
      p1s = p1s -100
    }

    if(p1s <= 0){
      p1h = p1h -100
    }

  }*/

}

function p2healthLoss(){

  /*if(uzi.isTouching(p2)){

    if(p2s >= 0){
      p2s = p2s -100
    }

    if(p2s <= 0){
      p2h = p2h -100
    }

  }*/

    /*if(p2s !== 0){
      p2s = p2s -150
    }

    else if(p2s !== 0){
      p2h = p2h -150
    }*/
  /*for(p2s === 500 ; p2s>= 0 ;p2s=p2s-100){
    console.log(p2s);
    console.log("is touching");
    sd2.height= p2s;
  if(p2s ===0){
    sd2.visible = false;
  }
  }*/

  if(bat.isTouching(p2) && sd2.visible === true ){

    if(counter <=10){
      sd2.height = 300;
      console.log(counter)
      counter  = counter +  Math.round(frameCount/60);
      console.log(sd2.height);
    }
    else if(counter > 10 && counter <=30){
      sd2.height = 200;
      console.log(counter)
      counter  = counter +  Math.round(frameCount/60);
      console.log(sd2.height);
      
    }
     else if(counter >30 && counter <=50){
      sd2.height = 50;
      console.log(counter)
      counter  = counter +  Math.round(frameCount/60);
      console.log(sd2.height);
    }
    else if(counter >50){
      sd2.visible = false;
      console.log(counter)
      counter  = counter +  Math.round(frameCount/60);
      console.log(sd2.height);
    }
    else{
      sd2.visible =true
      
    }
  }
  else if(sd2.visible === false && bat.isTouching(p2) && hp2.visible === true && counter>50){
   
    if(counter <=60){
      hp2.height = 300;
      console.log(counter)
      counter  = counter +  Math.round(frameCount/60);
      console.log(sd1.height);
    }
    else if(counter > 60 && counter <=90){
      hp2.height = 200;
      console.log(counter)
      counter  = counter +  Math.round(frameCount/60);
      console.log(sd1.height);
      
    }
     else if(counter >90 && counter <=110){
      hp2.height = 50;
      console.log(counter)
      counter  = counter +  Math.round(frameCount/60);
      console.log(sd1.height);
    }
    else if(counter >110){
      hp2.visible = false;
      console.log(counter)
      counter  = counter +  Math.round(frameCount/60);
      console.log(sd1.height);
    }
    else{
      hp2.visible =true
    }
  }
 
  
    //console.log("They are touching")
}

function createRay(){



}