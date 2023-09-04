let xBolinha = 400;
let yBolinha = 400;
let diametro = 15;

let velocidadeXBolinha = 7;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
  
  //se a bolinha tocar na borda volte 
  // (   verdadeiro    ou   verdadeiro)
  if (xBolinha > width || xBolinha < 0) {
    //velocidade x da bolinha recebe o seu valor atual
    //multiplicado por -1, que inverte o sinal
    velocidadeXBolinha = velocidadeXBolinha * -1;
  }

  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha = velocidadeYBolinha * -1;
  }
}
