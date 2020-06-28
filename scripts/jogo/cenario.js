class Cenario{
  constructor(imagem, velocidade, paralax){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;

    this.x3 = 0;
    this.x4 = width;
    this.paralax = paralax
  }
  
  exibe(){
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);

    if(this.paralax != undefined){
      image(this.paralax, this.x3, 0, width, height);
      image(this.paralax, this.x4, 0, width, height);
    }
  }
  
  move(){
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;

    this.x3 = this.x3 - this.velocidade * 3;
    this.x4 = this.x4 - this.velocidade * 3;
    
    if(this.x1 < -width){
      this.x1 = width;
    }
    
    if(this.x2 < -width){
      this.x2 = width;
    }

    if(this.x3 < -width){
      this.x3 = width;
    }
    
    if(this.x4 < -width){
      this.x4 = width;
    }
  }
}