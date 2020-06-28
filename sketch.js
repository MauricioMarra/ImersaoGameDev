function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo();  
  jogo.setup();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('INICIAR', width/2, height/2);
  // somDoJogo.loop();
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed() {
  jogo.keyPressed(key);

  if (key == 'Enter') {
    if (iniciouJogo == false) {
      iniciouJogo = true;
    } else if (fimDeJogo == true) {
      reset();
      fimDeJogo = false;
    }
  }
}

function draw() {
  cenas[cenaAtual].draw();
}