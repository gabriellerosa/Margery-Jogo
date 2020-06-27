class TelaInicial{
  
  constructor(){
    this.musicOn = false;
  }
  
  _tocarMusic(){
    if(this.musicOn) return;
    somInicial.loop();
    this.musicOn = true;
  }
  
  draw(){
    this._imagemDeFundo();
    this._tocarMusic();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    
    textFont(fonteTelaInicial);
    fill('#fff');
    textSize(40); 
    text('Margery', width/2 - 120, 160);
    textSize(20); 
    text('Fugindo da floresta', width/2 - 150, 220);
  }
  
  _botao(){
    botaoGerenciador.y = height/7 * 4;
    botaoGerenciador.draw();
  }
}