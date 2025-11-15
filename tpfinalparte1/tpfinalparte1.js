//https://youtu.be/CZVmnDwQAF8
//Rodrigo Ezequiel Rodriguez - Comisión 4

let imagen = [];
let fondo;
let textos = [];
let estado=0;
let fuente;
let sonido;

//pantallas
let pantallasHorizontales = [1,2,3,5,6,7,8,12];
let pantallasVerticales = [4,9,10,11,13,14,15,16,17,18,19,20,21];

let pantallasAvance = [1,2,3,4,6,7,8,10,12,13,14,15,17,18,19,20];
let pantallasDecision = [5,11];
let pantallaReinicio = [9,16,21];

function preload() {
 fondo = loadImage('data/fondo.jpg');
 
 sonido = loadSound("data/button.mp3");
 soundFormats('mp3', 'ogg');
 
 fuente = loadFont('data/constantia-bold.ttf');
 
 for (let i=0; i <= 21; i++) {
   imagen[i] = loadImage('data/imagen' + i + '.png');
  }
 textos = loadStrings('data/barba_azul.txt');
}

function setup() {
  createCanvas(640,480);
  textFont(fuente);
}


function draw() {
  background(0);
  noStroke();

  if(estado === 0) {
  image(imagen[0], 0, 0, width, height);
  fill(255);
  noStroke();
  rect(245,420,150,50);
  fill(0, 0, 255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("comenzar", 320, 440);
  return;
  }
  
  //pantalla de la historia
  dibujarPantallaGeneral(estado);
  
  if (pantallasAvance.includes(estado)) {
    botonEstado(600,447,25);
  }else if (pantallasDecision.includes(estado)) {
    if (estado === 5) { 
      botonesDobles("Confio en el", "Deberia Investigar");
    } else if (estado === 11){
    botonesDobles("Voy a ir a ver", "Mejor intento distraerme", 430);
  } 
  } else if (pantallaReinicio.includes(estado)) {
    if (estado === 16 || estado === 21) {
      botonReinicio2();
    }else{
    botonReinicio();
  }
 }
}

function dibujarPantallaGeneral(n) {
  image(fondo, 0, 0, width, height);
  fill(0);
  textAlign(CENTER);
  textSize(15);
 
 if (pantallasHorizontales.includes(n)) {
   image(imagen[n], 90, 10, 450, 300);
  
  if(n ===5) {
   text(textos[n - 1], 60, 270, 525, 150);
  }else{
   text(textos[n - 1], 60, 300, 525, 150);
  }
 }
 else if (pantallasVerticales.includes(n)) {
   image(imagen[n], 30, 20, 290, 440);
   text(textos[n - 1], 340, 20, 280, 420);
   }
}
function mousePressed(){
  if (estado === 0){
   if (mouseX > 245 && mouseX < 245+150 && mouseY > 420 && mouseY < 420+50){
     sonido.play();
     estado = 1;
  }
  return;
 }
 if(pantallasAvance.includes(estado)) {
   if(dist(mouseX, mouseY, 600, 440) < 30) {
     sonido.play();
     estado++;
   }
   return;
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
    return;
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
    } else if (mouseX > x2 && mouseX < x2 + ancho && mouseY > yPos && mouseY < yPos + alto) {
        sonido.play();
        estado = 12; 
    }
     return;
  }
  if (pantallaReinicio.includes(estado)) {
    if (clickBoton() || clickBoton2()) {
      sonido.play();
      estado = 0;
    }
  }
}
