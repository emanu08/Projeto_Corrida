var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
 boy_running = loadAnimation("Runner-1.png" , "Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
//crie um sprite para a pista 
path = createSprite(200,0,400,400);
//adicione uma imagem para a pista
path.addImage("path", pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
//path.y=path.widht/2;
pathImg= "path.png";

//crie um sprite de menino
    boy = createSprite(202,390,10,30);
//adicione uma animação de corrida para ele
    boy.addAnimation("boy" , boy_running);
    boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
invisibleLeftPath = createSprite(0,0,100,800);
 invisibleLeftPath.visible = false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
invisibleRightPath = createSprite(410,0,100,800);
invisibleRightPath.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX

  if(keyDown("Left")){

    boy.velocityX = -3 ;
  }
  if(keyDown("Right")){

    boy.velocityX = 3;
  }
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(invisibleLeftPath);
  boy.collide(invisibleRightPath);
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
  
}
