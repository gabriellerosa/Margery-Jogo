class Slime extends Inimigo{
   constructor(imagem){
     super();
     this.imagem = imagem;
     this.frameAtual = 0;
     this.x = width;
     this.largura = 70;
     this.altura = 50;
     this.y = height - this.altura - 58;
     this.delay = 0; 
     this.velocidade = 10;
     this.x = width + this.delay;
   }
  
  exibe(){
    image(this.imagem[Math.floor(this.frameAtual/3)], this.x, this.y, this.largura, this.altura, 0, 12, 32, 12);
    this.anima();   
  }
  
  anima(){
    this.frameAtual++;
    this.frameAtual %= 3 * this.imagem.length;
  }
}