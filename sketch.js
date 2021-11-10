var canvas;
var music;
var box1;
var edges;
var sur1,sur2,sur3,sur4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces



    //create box sprite and give velocity
     box1=createSprite(random(100,600),20,20);
     box1.shapeColor="white";
     box1.velocityX=5;
     box1.velocityY=5;

     sur2=createSprite(300,590,190,20);
     sur2.shapeColor="red";

     sur3=createSprite(510,590,170,20);
     sur3.shapeColor="blue";

     sur4=createSprite(710,590,170,20);
     sur4.shapeColor="yellow";

     sur1=createSprite(90,590,170,20);
     sur1.shapeColor="green";
}

function draw() {
    background(rgb(169,169,169));

   

    //create edgeSprite

    edge=createEdgeSprites();
   

   box1.bounceOff(edge);
   
   
   if(box1.isTouching(sur1) && box1.bounceOff(sur1)) {
       box1.shapeColor="green";
       music.play();
   }

   if(box1.isTouching(sur2) && box1.bounceOff(sur2)) {
    box1.shapeColor="red";
    music.play();
   }

   if(box1.isTouching(sur3) && box1.bounceOff(sur3)) {
    box1.shapeColor="blue";
    music.play();
   }

   if(box1.isTouching(sur4) && box1.bounceOff(sur4)) {
    box1.shapeColor="yellow";
    music.play();
   }

    //add condition to check if box touching surface and make it box

    drawSprites();
}
