class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.pulos = 0;
    this.invencivel = false;
    
    this.somDePulo = loadSound('./sons/somPulo.mp3');
  }
  
  pular(){
    if(this.pulos < 2){
      this.velocidadeDoPulo = -50;
      this.somDePulo.play();
      this.pulos++;
    }
  }
  
  aplicarGravidade(){
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  ficarInvencivel(){
    this.invencivel = true;
    setTimeout(()=>{
      this.invencivel = false;
      
    }, 1000);
  }
  
  estaColidindo(inimigo){
    if(this.invencivel){return false;}
    
    const precisao = 0.7;
    return collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x, 
      inimigo.y, 
      inimigo.largura * precisao, 
      inimigo.altura * precisao
    );
    
  }
}



