function setup() {
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  
  cenas = {
    jogo, //:jogo
    telaInicial //:telaInicial
  };
  frameRate(40);
  //somDoJogo.loop();
}

function keyPressed(){
   jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}