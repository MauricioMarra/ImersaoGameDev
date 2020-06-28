function preload() {
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imagemParalax = loadImage("imagens/cenario/floresta_front.png");
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  imagemInimigo = loadImage("imagens/inimigos/gotinha.png");
  imagemTroll = loadImage("imagens/inimigos/troll.png");
  imagemInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png");
  imagemGameOver = loadImage("imagens/assets/game-over.png");
  imagemVida = loadImage("imagens/assets/coracao.png");
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  
  imagemTelaInicial = loadImage("imagens/cenario/telaInicial.png");
  fonteTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf")
  
  fita = loadJSON("fita/fita.json");

  matrizInimigo = construirMatriz(420, 700, 28, 4, 7);
  matrizPersonagem = construirMatriz(2400, 1920, 16, 5, 4);
}

function construirMatriz(widthImg, heightImg, frames, linhas, colunas){
  let matriz = [];
  let larguraUnitaria = widthImg/linhas;
  let alturaUnitaria = heightImg/colunas;
  var linhaAtual=0;
  var colunaAtual=0;

  for(i=0; i<frames; i++){

    matriz[i, i] = [linhaAtual * larguraUnitaria, colunaAtual * alturaUnitaria];
    linhaAtual ++;
    
    if(linhaAtual == linhas){
      linhaAtual = 0;
      colunaAtual++
    }
  }

  return matriz;
}