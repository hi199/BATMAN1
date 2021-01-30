const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
var drops=[]
var maxDrops = 100
var thunderCreatedFrame=0;
function preload(){
thunderb1IMG=loadImage("thunderbolt/1.png")
thunderb2IMG=loadImage("thunderbolt/2.png")
thunderb3IMG=loadImage("thunderbolt/3.png")
thunderb4IMG= loadImage("thunderbolt/4.png")
Wboy=loadAnimation("Walking Frame/walking_1.png"
,"Walking Frame/walking_2.png",
"Walking Frame/walking_3.png",
"Walking Frame/walking_4.png",
"Walking Frame/walking_5.png",
"Walking Frame/walking_6.png",
"Walking Frame/walking_7.png",
"Walking Frame/walking_8.png")
}

function setup(){
createCanvas(400,700)
boy=createSprite(200,450)  
boy.addAnimation("wboy",Wboy)
boy.scale=(0.6)
}

function draw(){
background("black")
rand = Math.round(random(1,4));
 if(frameCount%80===0){
thunderCreatedFrame=frameCount;
 thunder = createSprite(random(10,370),
  random(10,30), 10, 10); switch(rand){
case 1: thunder.addImage(thunder1);
break; 
case 2: thunder.addImage(thunder2);
break;
 case 3: thunder.addImage(thunder3);
 break; 
 case 4: thunder.addImage(thunder4);
break; 
default: break; 
} 
thunder.scale = random(0.3,0.6) }
if(thunderCreatedFrame + 10 ===frameCount && thunder){ 
    thunder.destroy(); 
}
for(var i = 0; i<maxDrops; i++){ 
    drops[i].showDrop(); 
    drops[i].updateY() 
}
drawSprites()    
}   

