// FUNÇÃO RELACIONADA A PONTUAÇÃO DO JOGO

class Pontos{
  
 constructor(){
  this.pontos = 0; 
 }

 // >> Texto da potuação << 
 exibe(){
  textAlign(RIGHT);
  fill('#fff');
  textSize(50);
  text('Score: ', width - 90, 50);
  text(parseInt(this.pontos), width - 30, 50); 
 }
 
 // >> Vai adicionando pontos a pontuaçao<< 
 adicionarPonto(){
   this.pontos += .2;
 }
}