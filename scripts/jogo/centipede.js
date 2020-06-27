class Centipede extends Inimigo{
  constructor(imagem){
    super();
    this.imagem = imagem;
    this.frameAtual = 0;
    this.matriz = [18, 90, 162, 234];
    this.delay = 0; 
    this.x = width + this.delay;
    this.y = height - 125;
    this.altura = 72;
    this.largura = 108;
    this.velocidade = 10;
  }
  
  exibe(){
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[Math.floor(this.frameAtual/4)], 36, 54, 36);
    this.anima();
  }
  
  anima(){
    this.frameAtual += 1;
    
    if(this.frameAtual >= 4 * 4){
      this.frameAtual = 0;
    } 
  }
}