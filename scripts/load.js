// FUNÇÃO RESPONSÁVEL PARA PRE CARREGAR ITENS QUE SERÃO APRESENTADOS NO JOGO

function preload(){
  
  // CARREGANDO FONTES DE LETRAS DO JOGO
  pixelFont = loadFont('fontes/FreePixel.ttf');
  fonteTelaInicial = loadFont('fontes/Fipps.otf');
  
  // CARREGANDO IMAGENS DE BACKGROUNDS - CENARIOS DO JOGO
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png'); 
  for(let i = 0; i < 4; i++){
    
    let imagem = loadImage('imagens/cenario/fundo' + i +'.png');
    imagemCenario.push(imagem);
    
  }
  
  // CARREGANDO IMAGEM DA PERSONAGEM
  for(let i = 0; i < 7; i++){
    
    let imagem = loadImage('imagens/personagem/Margery_Run_' + i + '.png');
    imagemPersonagem.push(imagem);
    
  }
  
  // CARREGANDO AS IMAGENS DOS INIMIGOS
  for(let i = 0; i < 5; i++){
    
    let imagem = loadImage('imagens/inimigos/slime-move' + i + '.png');
    imagemSlime.push(imagem);
    
  }
  imagemCentipede = loadImage('imagens/inimigos/Centipede_walk.png');
  imagemFantasma = loadImage('imagens/inimigos/ghost.png');  
  
  // CARREGANDO ITENS NA TELA
  imagemVida = loadImage('imagens/assets/coracao.png');
  
  // CARREGANDO SONS DO JOGO
  
  somDoJogo = loadSound('sons/Spy.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  somHurt = loadSound('sons/damage.wav');
  somGameOver = loadSound('sons/gameover.wav');
  somInicial = loadSound('sons/menu.mp3');
}
