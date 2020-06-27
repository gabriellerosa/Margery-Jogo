class Personagem{
   constructor(imagem){
     this.imagem = imagem;
     this.frameAtual = 0;
     this.altura = 80
     this.largura = 70
       
     this.yInicial = height - 135;
     this.y = this.yInicial; //height - 135; altura == 135
     
     this.gravidade = 3;
     this.velocidadeDoPulo = 0;
     this.pulos = 0;
     this.invencivel = false;
     this.estaPulando = false;
   }
  
  exibe(){
    if(this.estaPulando){
      image(this.imagem[6], 0, this.y, this.largura, this.altura); 
    }else{
      image(this.imagem[Math.floor(this.frameAtual/3)], 0, this.y, this.largura, this.altura);
      this.anima();
    }
  }
  
  anima(){
    this.frameAtual++;
    this.frameAtual %= 3 * (this.imagem.length - 1);
  }
  
  pula(){ 
    this.estaPulando = true;
    if(this.pulos >= 2) return
    this.velocidadeDoPulo = - 30;
    this.pulos = this.pulos + 1;
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    
    if(this.y > this.yInicial){
       this.y = this.yInicial;  
       this.pulos = 0;
       this.estaPulando = false;
    }   
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estaColidindo(slime){
    
    if(this.invencivel){
      return false;  
    }
    
    noFill();
    rect(0, this.y, this.largura, this.altura);
    rect(slime.x, slime.y, slime.largura, slime.altura);
    
    const precisao = .7
    const colisao = collideRectRect(0, this.y, this.largura * precisao, this.altura * precisao, slime.x, slime.y, slime.largura * precisao, slime.altura * precisao);
    
    return colisao;
  }
}

/*if(this.frameAtual >= 2 * this.imagem.length - 1){
      this.frameAtual = 0;
    }*/

/*image(this.imagem, 0, height - 135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270);*/