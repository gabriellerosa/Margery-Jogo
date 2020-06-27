class Fundo{

  constructor(fundos){
  
    this.fundos = fundos;
    this.x = [];
    for(let i = 0; i < this.fundos.length; i++){
      this.x.push(0);
    }
    this.v = [0.5, 1, 5, 8];
  }

  exibe(){
    for(let i = 0; i < this.fundos.length; i++){
      image(this.fundos[i], this.x[i], 0, width, height);
      image(this.fundos[i], this.x[i] + width, 0, width, height);
    }
  }

  move(){
    for(let i = 0; i < this.fundos.length; i++){
      
      this.x[i] -= this.v[i];
      
      if(this.x[i] < -width){
        this.x[i] += width;
      }
    }
  }
}