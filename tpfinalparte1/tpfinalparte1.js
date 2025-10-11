// https://youtu.be/pW6MZYz4NZA
let imagen = [];
let fondo;
let textos = [];
let estado=0;
let fuente;
let sonido;

function preload() {
  fondo = loadImage('data/fondo.jpg');
  sonido = loadSound("data/button.mp3")
    soundFormats('mp3', 'ogg');
  fuente = loadFont('data/constantia-bold.ttf');

  for (let i=0; i <= 21; i++) {
    imagen[i] = loadImage('data/imagen' + i + '.png');
  }
  textos = loadStrings('data/barba_azul.txt');
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente);
}


function draw() {
  background(0);
  noStroke();

  if (estado === 0) {
    image(imagen[0], 0, 0, width, height);
    fill(255);
    noStroke();
    rect(245, 420, 150, 50);
    fill(0, 0, 255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("comenzar", 320, 440);
    return;
  }

  //pantalla de la historia principal (1-5)
  if (estado === 1) {
    image(fondo, 0, 0, width, height);
    image(imagen[1], 90, 20, 450, 300);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[0], 65, 295, 500, 150);
    botonEstado(600, 440, 25);
    return;
  }

  //pantalla 2
  if (estado === 2) {
    image(fondo, 0, 0, width, height);
    image(imagen[2], 90, 20, 450, 300);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[1], 65, 305, 500, 150);
    botonEstado(600, 440, 25);
    return;
  }

  //pantalla 3
  if (estado === 3) {
    image(fondo, 0, 0, width, height);
    image(imagen[3], 90, 12, 450, 295);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[2], 60, 310, 500, 150);
    botonEstado(600, 440, 25);
    return;
  }

  //pantalla 4
  if (estado === 4) {
    image(fondo, 0, 0, width, height);
    image(imagen[4], 30, 20, 290, 440);
    fill(0);
    textAlign(RIGHT);
    textSize(15);
    text(textos[3], 355, 30, 225, 400);
    botonEstado(600, 440, 25);
    return;
  }

  //pantalla 5
  if (estado === 5) {
    image(fondo, 0, 0, width, height);
    image(imagen[5], 100, 20, 440, 300);
    fill(255);
    textAlign(CENTER);
    textSize(15);
    text(textos[4], 40, 280, 550, 150);
    botonesDobles("Confío en el", "Deberia investigar");
    return;
  }

  //pantalla 6
  if (estado === 6) {
    image(fondo, 0, 0, width, height);
    image(imagen[6], 90, 20, 450, 300);
    fill(0)
      textAlign(CENTER);
    textSize(15);
    text(textos[5], 40, 290, 550, 150);
    botonEstado2(600, 440, 25);
    return;
  }
  //pantalla 7
  if (estado === 7) {
    image(fondo, 0, 0, width, height);
    image(imagen[7], 90, 20, 450, 300);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[6], 40, 280, 550, 150);
    botonEstado2(600, 440, 25);
    return;
  }
  //pantalla 8
  if (estado === 8) {
    image(fondo, 0, 0, width, height);
    image(imagen[8], 90, 20, 450, 300);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[7], 40, 290, 550, 150);
    botonEstado2(600, 440, 25);
    return;
  }
  //pantalla 9
  if (estado === 9) {
    image(fondo, 0, 0, width, height);
    image(imagen[9], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[8], 370, 30, 220, 400);
    botonReinicio();
    return;
  }
  //pantalla 10
  if (estado === 10) {
    image(fondo, 0, 0, width, height);
    image(imagen[10], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[9], 328, 25, 300, 410);
    botonEstado3(600, 440, 25);
    return;
  }
  //pantalla 11
  if (estado === 11) {
    image(fondo, 0, 0, width, height);
    image(imagen[11], 30, 40, 250, 380);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[10], 300, 10, 320, 450);
    botonesDobles("Voy a ir a ver", "Mejor intento distraerme", 430);
    return;
  }
  //pantalla 12
  if (estado ===12) {
    image(fondo, 0, 0, width, height);
    image(imagen[12], 140, 20, 330, 300);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[11], 40, 295, 550, 150);
    botonEstado4(600, 440, 25);
    return;
  }
  //pantalla 13
  if (estado===13) {
    image(fondo, 0, 0, width, height);
    image(imagen[13], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[12], 350, 10, 250, 450);
    botonEstado4(600, 440, 25);
    return;
  }
  //pantalla 14
  if (estado===14) {
    image(fondo, 0, 0, width, height);
    image(imagen[14], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[13], 350, 10, 250, 450);
    botonEstado4(600, 440, 25);
    return;
  }
  //pantalla 15
  if (estado===15) {
    image(fondo, 0, 0, width, height);
    image(imagen[15], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[14], 350, 10, 250, 450);
    botonEstado4(600, 440, 25);
    return;
  }
  //pantalla 16
  if (estado===16) {
    image(fondo, 0, 0, width, height);
    image(imagen[16], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[15], 340, 5, 280, 340);
    botonReinicio();
    return;
  }
  //pantalla 17
  if (estado===17) {
    image(fondo, 0, 0, width, height);
    image(imagen[17], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[16], 340, 70, 280, 340);
    botonEstado5(600, 440, 25);
    return;
  }
  //pantalla 18
  if (estado===18) {
    image(fondo, 0, 0, width, height);
    image(imagen[18], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[17], 340, 5, 280, 340);
    botonEstado5(600, 440, 25);
    return;
  }
  //pantalla 19
  if (estado===19) {
    image(fondo, 0, 0, width, height);
    image(imagen[19], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[18], 340, 60, 280, 340);
    botonEstado5(600, 440, 25);
    return;
  }
  //pantalla 20
  if (estado===20) {
    image(fondo, 0, 0, width, height);
    image(imagen[20], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[19], 340, 60, 280, 340);
    botonEstado5(600, 440, 25);
    return;
  }
  //pantalla 21
  if (estado===21) {
    image(fondo, 0, 0, width, height);
    image(imagen[21], 30, 20, 290, 440);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(textos[20], 340, 60, 280, 340);
    botonReinicio2();
    return;
  }
}

function mousePressed() {
  if (estado === 0) {
    if (mouseX > 245 && mouseX < 245+150 && mouseY > 420 && mouseY < 420+50) {
      sonido.play();
      estado = 1;
      return;
    }
  }
  if (estado>= 1 && estado <= 4) {
    if (dist(mouseX, mouseY, 600, 440) < 30) {
      sonido.play();
      estado++;
    }
  }
  if (estado >= 6 && estado <= 8) {
    if (dist(mouseX, mouseY, 600, 440) < 30) {
      sonido.play();
      estado++;
    }
  }
  if (estado === 10) {
    let x = 600;
    let y = 440;
    let r = 25;
    if (dist(mouseX, mouseY, x, y) < r) {
      sonido.play();
      estado = 11;
    }
  }
  if (estado >= 12 && estado <= 15) {
    if (dist(mouseX, mouseY, 600, 440) < 30) {
      sonido.play();
      estado++;
    }
  }
  if (estado >= 17 && estado <=20) {
    if (dist(mouseX, mouseY, 600, 440) < 30) {
      sonido.play();
      estado++;
    }
  }

  if (estado === 5) {
    let yPos = 400;
    let ancho = 150;
    let alto = 40;
    let x1 = width * 0.25 - ancho / 2;
    let x2 = width * 0.75 - ancho / 2;
    if (mouseX > x1 && mouseX < x1 + ancho && mouseY > yPos && mouseY < yPos + alto) {
      sonido.play();
      estado = 10; // Cambia al estado de la pantalla 10(historia original)
    } else if (mouseX > x2 && mouseX < x2 + ancho && mouseY > yPos && mouseY < yPos + alto) {
      sonido.play();
      estado = 6; // Cambia al estado de la pantalla 6(historia alternativa)
    }
  }
  if (estado === 9) {
    if (clickBoton()) {
      sonido.play();
      estado = 0;
      return;
    }
  }

  if (estado === 16) {
    if (clickBoton()) {
      sonido.play();
      estado = 0;
      return;
    }
  }
  if (estado === 21) {
    if (clickBoton2()) {
      sonido.play();
      estado = 0;
      return;
    }
  }
  if (estado === 11) {
    let yPos = 430;
    let ancho = 150;
    let alto = 40;
    let x1 = width * 0.25 - ancho / 2;
    let x2 = width * 0.75 - ancho / 2;


    if (mouseX > x1 && mouseX < x1 + ancho && mouseY > yPos && mouseY < yPos + alto) {
      sonido.play();
      estado = 17;
      return;
    } else if (mouseX > x2 && mouseX < x2 + ancho && mouseY > yPos && mouseY < yPos + alto) {
      sonido.play();
      estado = 12;
      return;
    }
  }

  let radioDeteccion = 30;

  if (dist(mouseX, mouseY, 600, 440) < radioDeteccion) {
    // La condición excluye los estados que ya tienen botones especiales (0, 5, 9, 11, 16, 21)
    if (estado >= 1 && estado <= 21 && estado !== 5 && estado !== 11 && estado !== 9 && estado !== 16 && estado !== 21 && estado !== 0) {
      sonido.play(); //
      estado++;
      return; // 
    }
  }
}
