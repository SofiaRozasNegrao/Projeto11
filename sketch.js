var homem
var path, bordaEsquerda
var energetico, moeda, bomba
var homem
var path, bordaEsquerda, bordaDireita
var energetico, moeda, bomba

function preload(){
  homemAnimation=loadAnimation('Runner-1.png', 'Runner-2.png');
  pathImagem=loadImage('path.png');
  energetico=loadImage('energyDrink.png');
  moeda=loadImage('coin.png');
  bomba=loadImage('bomb.png');
}

function setup(){
  createCanvas(400,400);
  
  homem=createSprite(200,350,100,100);
  homem.addAnimation(homemAnimation);

  path=createSprite(200,200,400,400);
  path.addImage(pathImagem);
  bordaEsquerda=createSprite(50,200,400,50);
  bordaEsquerda.visible=false;
  bordaDireita=createSprite(350,200,400,50)
  bordaDireita.visible=false;
}

function draw() {
  background("black");

  path.addImage(pathImagem);
  path.velocityY=-2;
  if(path.y > 400){
  path.y=path.height/2;
  }
 
  homem.depth=path.depth+1;
  bordaEsquerda.collide(homem)
  bordaDireita.collide(homem)

  homem.x=mouse.x

  drawSprites()
}
