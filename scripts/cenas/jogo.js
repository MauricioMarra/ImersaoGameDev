class Jogo{
  constructor(){
    this.indiceAtual = 0;    
    this.mapa = fita.mapa;
  }
  
  setup(){
    Cenario = new Cenario(imagemCenario, 3, imagemParalax);    
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    // personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270); //Personagem do curso
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, -20, 240, 240, 480, 480); //Novo personagem
    //image(imagemPersonagem, 0 ,0, 240, 240, 100, 100, 480, 480);
    //image(imagemPersonagem, posicaoX , posicaoY, larguraDentroDaSubsecao, alturaDentroDaSubsecao, xInicialSubsecao, yInicialSubsecao(?), larguraSubsecao, alturaSubSecao);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);

    const troll = new Inimigo(matrizInimigoGrande, imagemTroll, width, 0, 200, 200, 400, 400, 10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(troll);
    inimigos.push(inimigoVoador);
  }
  
  keyPressed(key){
    if (key == 'ArrowUp') {
      personagem.pular();
    }
  }
  
  draw(){
    Cenario.exibe();
    Cenario.move();

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicarGravidade();
    const linhaAtual = this.mapa[this.indiceAtual];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = (inimigo.x < -inimigo.largura);

    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indiceAtual++;
      inimigo.aparecer();
      if (this.indiceAtual > this.mapa.length - 1) {
        this.indiceAtual = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perderVida();
      personagem.ficarInvencivel();
      if(vida.vidas === 0){
        vida.perderVida();
        image(imagemGameOver, width/2 - imagemGameOver.width/2, height/2);
        noLoop();
      }
    };

  } 
}
  