let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha(); 
  verificaColisaoBorda();  
  mostrarRaquete();
}

function mostrarRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}

function verificaColisaoBorda() { //inicio da função
  //se a bolinha tocar na borda volte 
  // (   verdadeiro    ou   verdadeiro)
  if (xBolinha + raio > width || xBolinha - raio < 0) { //inicio do if ou Se
    //velocidade x da bolinha recebe o seu valor atual
    //multiplicado por -1, que inverte o sinal
    velocidadeXBolinha = velocidadeXBolinha * -1;
  } // fim do if

  if (yBolinha + raio > height || yBolinha - raio < 0) { // inicio do if
    velocidadeYBolinha = velocidadeYBolinha * -1;
  } // fim do if
} // fim da função
