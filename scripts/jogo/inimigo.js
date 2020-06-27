class Inimigo{
  
   construtor(){
   }
  
   move(){
    
    if(this.x < -this.largura /*-this.delay*/){
       //this.x = width + this.delay;
       //this.delay = Math.random()*(1005-300)+300;
       return;
    }  
    this.x = this.x - this.velocidade;
   }
  
   setVelocidade(velocidade){
      this.velocidade = velocidade;
      this.x = width;
   }
}