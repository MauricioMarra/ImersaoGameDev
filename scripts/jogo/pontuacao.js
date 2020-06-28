class Pontuacao{
  constructor(){
    this.pontos = 0;
    this.tamanhoTexto = 50;
  }
  
  exibe(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(this.tamanhoTexto);
    text(parseInt(this.pontos), width - 30, 100);
  }
  
  adicionarPonto(){
    this.pontos += 0.2;
  }
}