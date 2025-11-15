let mijuego;
let imagenJugador;
let imgInicio;
let imgDerrota;
let imgVictoria;
let esposaUp, esposaDown, esposaLeft, esposaRight;
let imgllave;
let fuenteBotones;
let sonidoBoton;

function preload() {
  imagenEsposa = loadImage('libraries/esposa.png');
  imgInicio = loadImage('libraries/pantalla_inicio.jpg');
  imgVictoria = loadImage('libraries/pantalla_victoria.png');
  imgDerrota = loadImage('libraries/pantalla_derrota.png');
  esposaUp = loadImage('libraries/esposa_up.png');
  esposaDown = loadImage('libraries/esposa_down.png');
  esposaLeft = loadImage('libraries/esposa_left.png');
  esposaRight = loadImage('libraries/esposa_right.png');
  imgllave =loadImage('libraries/llave.png');
  fuenteBotones = loadFont('libraries/Gabriola.ttf');
  sonidoBoton = loadSound('libraries/button.mp3');
  
  
}
function setup() {
  createCanvas(640, 480);
  mijuego = new juego(); 
  mijuego.iniciar(); 
  mijuego.ui.cargarImagenes(imgInicio, imgVictoria, imgDerrota);
mijuego.ui.cargarFuentes(fuenteBotones);
}

function draw() {
  mijuego.actualizarYDibujar();
}

function keyPressed() {
  mijuego.manejarTecla(keyCode);
}

function mousePressed() {
  mijuego.manejarClic(mouseX, mouseY);
}

