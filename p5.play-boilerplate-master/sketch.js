var iss;
var hasDocked=false;
var spaceCraft;


function preload(){
  bkg=loadImage("spacebg.jpg")
  issImg=loadImage("iss.png")
  spaceCraftImg1=loadImage("spacecraft1.png")
  spaceCraftImg2=loadImage("spacecraft2.png")
  spaceCraftImg3=loadImage("spacecraft3.png")
  spaceCraftImg4=loadImage("spacecraft4.png")
  
}

function setup() {
  createCanvas(800,400);

 iss=createSprite(400, 200, 50, 50);
 iss.addImage(issImg);
 iss.scale=0.8
 iss.setCollider("rectangle",-30,0,100,100)

 spaceCraft=createSprite(400,300,50,50);
 spaceCraft.addImage(spaceCraftImg1);
 spaceCraft.scale=0.17
 spaceCraft.x=400

 spaceCraft.setCollider("rectangle",0,-20,300,300)

 //spaceCraft.debug=true;
 //iss.debug=true;
 

 


 
}

function draw() {
  background(bkg);  

  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(spaceCraftImg4)
      spaceCraft.x=spaceCraft.x-20;
    }

    if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(spaceCraftImg3)
      spaceCraft.x= spaceCraft.x+30;
    }

    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(spaceCraftImg2)
    }

    if(keyDown(UP_ARROW)){
      spaceCraft.addImage(spaceCraftImg2)
      spaceCraft.x=spaceCraft.x-10;
      spaceCraft.y=spaceCraft.y-10;
    }

    if (spaceCraft.isTouching(iss)){
      fill("white");
      text("DOCKING IS SUCCESSFUL",300,350)
    }
  }

  drawSprites();
}
