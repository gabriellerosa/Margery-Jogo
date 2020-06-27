class Jogo{
  
  constructor(){
    this.inimigoAtual = 0;
    this.musicaOn = false;
    this.acabouJogo = false;
  }
  
  setup(){
    cenario = new Fundo(imagemCenario);
    personagem = new Personagem(imagemPersonagem);
    pontuacao = new Pontos();
    vida = new Vida(3, 3);

    let slime = new Slime(imagemSlime);
    let centipede = new Centipede(imagemCentipede);
    let fantasma = new Fantasma(imagemFantasma);

    inimigos.push(slime);
    inimigos.push(fantasma);
    inimigos.push(centipede);  
    
  }
  
  keyPressed(key){
   if(key === 'ArrowUp'){
      personagem.pula();
      somPulo.play();
    } 
  }
  
  tocarMusic(){
    if(this.musicOn) return;
    //somDoJogo.loop();
    this.musicOn = true;
    somInicial.stop();
  }
  
  draw(){
    cenario.exibe();
    cenario.move();
  
    vida.draw();
    
    this.tocarMusic();  
    
    textFont(pixelFont);
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoInvisivel = inimigo.x <= -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if(inimigoInvisivel){
       //this.inimigoAtual++;
       this.inimigoAtual = parseInt(random(0, 3));
       console.log(this.inimigoAtual);
       if(this.inimigoAtual > 2){
          this.inimigoAtual = 0; 
       }

       inimigo.setVelocidade(parseInt(random(15, 50))); 
    }

    if(this.acabouJogo){
      textFont(pixelFont);
      fill('#bd1a1a');
      textSize(30); 
      text('created by Fefezoca e Gabi-chan', 600, height/2 + 25); 
      image(imagemGameOver, width/3 - 100, height/3);
      noLoop();
    }
    
    if(personagem.estaColidindo(inimigo)){
         vida.perdeVida();
         somHurt.play();
         personagem.tornarInvencivel();

         if(vida.vidas == 0){
           
           this.acabouJogo = true;
           somDoJogo.stop();
           somGameOver.play();
         }
    } 
  }
}