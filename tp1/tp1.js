// https://youtu.be/ULtnzRqb570

let referencia;
let coloresInvertidos = false;

function preload() {
  referencia = loadImage("referencia.jpg");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  if (coloresInvertidos) {
    background(0);
    stroke(255);
  } else {
    background(255);
    stroke(0);
  }

  image(referencia, 0, 0, 400, 400);

  drawObra();
}

// Función que NO retorna valor y recibe parámetros
function drawObra() {
  let cantidad = 10;
  let startX = 400;
  let endX = 720;
  let espacioX = (endX - startX) / (cantidad - 1);
  let maxdesplazamiento = 30;
  let desplazamiento = 0;

  // Determinar el desplazamiento en función del mouse
  if (mouseX > 380) {
    if (mouseX < 400) {
      desplazamiento = map(mouseX, 380, 400, -maxdesplazamiento, 0);
    } else {
      desplazamiento = map(mouseX, 400, width, 0, maxdesplazamiento);
    }
  } else {
    desplazamiento = 0;
  }

  let grosorMax = 12;
  let grosorMin = 5;

  // Dibujo de las líneas
  for (let i = 0; i < cantidad; i++) {
    let x = startX + i * espacioX;
    let xMedioBase = 500 + map(i, 0, cantidad - 1, 0, 120);
    let xMedio = xMedioBase + desplazamiento;

    // calcular la altura y movimiento del punto medio
    let yMedio;
    if (desplazamiento < 0) {
      yMedio = map(i, 0, cantidad - 1, 180, 270);
    } else if (desplazamiento > 0) {
      yMedio = map(i, 0, cantidad - 1, 270, 180);
    } else {
      yMedio = 225;
    }

    // Llamar a la función que calcula el grosor
    let grosor = calcularGrosor(i, cantidad, desplazamiento, grosorMin, grosorMax);

    strokeWeight(grosor);

    // Ciclo for anidado para dibujar dos líneas cercanas
    for (let j = -1; j <= 0; j++) {
      let desplazamientoY = j * 3;
      line(x, 0 + desplazamientoY, xMedio, yMedio + desplazamientoY);
      line(x, height + desplazamientoY, xMedio, yMedio + desplazamientoY);
    }
  }
}

// Función que retorna un valor (grosor de la línea) y recibe parámetros
function calcularGrosor(i, cantidad, desplazamiento, grosorMin, grosorMax) {
  if (desplazamiento < 0) {
    return map(i, 0, cantidad - 1, grosorMax, grosorMin);
  } else if (desplazamiento > 0) {
    return map(i, 0, cantidad - 1, grosorMin, grosorMax);
  } else {
    return (grosorMax + grosorMin) / 2;
  }
}

function mousePressed() {
  coloresInvertidos = !coloresInvertidos;
}

function keyPressed() {
  if (key == 'r' || key == 'R') {
    coloresInvertidos = false;
  }
}
