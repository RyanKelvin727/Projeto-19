var bgImg;
var gato,gatoImg1,gatoImg2;
var rato,ratoImg1,ratoImg2;


function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("garden.png");
    gatoImg1 = loadImage("cat1.png");
    ratoImg1 = loadImage("mouse1.png");
    gatoImg2 = loadImage("cat2.png","cat3.png");
    ratoImg2 = loadImage("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870,600);
    gato.addImage("gatoSentado",gatoImg1);
    gato.scale = 0.2;

    rato = createSprite(870,600);
    rato.addImage("ratoFeliz",ratoImg2);
    rato.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(gato.x = rato.x < (gato.width = rato.width)/2){
        gato.velocityX = 0;
        gato.addImage("últimaImagemGato", gatoImg3);
        gato.changeImage("últimaImagemGato");
        gato.x = 300;
        gato.scale = 0.2;
    }
    drawSprites();
}

function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
if(keyCode === LEFT_ARROW){
    rato.addImage("ratoProvocando",ratoImg2);
    rato.changeImage("ratoProvocando");
    rato.frameDelay = 25;

    gato.velocityX = -5;
    gato.addImage("gatoAndando",gatoImg2);
    gato.changeImage("gatoAndando");
    gato.frameDelay = 25;
}

}
