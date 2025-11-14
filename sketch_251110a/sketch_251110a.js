let mijuego;
let imagenJugador;

function preload() {
  imagenEsposa = loadImage('libraries/esposa.png');
}
function setup() {
  createCanvas(640, 480);
  mijuego = new juego(); 
  mijuego.iniciar(); 
}

function draw() {
  // En lugar de tener el IF aquí, llamamos a un método de la clase.
  mijuego.actualizarYDibujar();
}

function keyPressed() {
  // Delegamos el evento de tecla a la clase.
  mijuego.manejarTecla(keyCode);
}

function mousePressed() {
  // Delegamos el evento de clic a la clase.
  mijuego.manejarClic(mouseX, mouseY);
}