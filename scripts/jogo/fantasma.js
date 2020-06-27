class Fantasma extends Inimigo{
  
 constructor(imagem){
   super();
    this.imagem = imagem;
    this.frameAtual = 0;
    this.matriz = [0, 32, 64];
    this.delay = 0;
    this.x = width + this.delay;
    this.altura = 68;
    this.y = 190;
    this.largura = 68;
    this.velocidade = 10;
 }
  
  exibe(){
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[Math.floor(this.frameAtual/6)], 32, 32, 30);
    this.anima();
  }
  
  anima(){
    this.frameAtual += 1;
    
    if(this.frameAtual >= 3 * 6){
      this.frameAtual = 0;
    } 
  }
}